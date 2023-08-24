import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import LoadingMessage from "./modules/LoadingMessage";
import CurrentTimeDisplay from "./modules/CurrentTimeDisplay";
import apiKeys from "./apiKeys";

export const WeatherIcons = {
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};
const animateBorder = keyframes`
  0% {
    border: 2px solid skyblue;
  }
  50% {
    border: 10px solid skyblue;
  }
  100% {
    border: 1px solid skyblue;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
  animation: ${animateBorder} 2s linear infinite;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;



function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();  
    setLoading(true); 
 
    try {
      setError(null); // Reset error state before making the API call

      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeys.key}`,
      );

      // Check if response contains data
      if (response.data) {
        updateWeather(response.data);
      } else {
        setError("No response from the API.");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError("Enter a valid Place");
      } else {
        console.error("Error fetching weather data:", error);
        setError("An error occurred while fetching weather data.");
      }
    }
    finally {
      setLoading(false); // Set loading state to false after data fetching is complete
    }
  };

  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      
      {error ? (
        <>
        <CurrentTimeDisplay/>
        <CityComponent error={error} updateCity={updateCity} fetchWeather={fetchWeather} />
        </>
      ) : 
      loading ? ( // Show loading message while loading state is true
      <>
     
        <LoadingMessage>Loading...</LoadingMessage>
        </>
      
      )
      :
      city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <>
        <CurrentTimeDisplay/>
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        </>
      )}
    </Container>
  );
}

export default App;


