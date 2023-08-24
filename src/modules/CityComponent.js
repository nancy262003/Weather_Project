import styled from "styled-components";
import React from "react";
import ErrorMessage from "./ErrorMessage";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  /* Hover effect */
  &:hover {
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather,error } = props;
  return (
    <>
    {error?(
      <>
      <WelcomeWeatherLogo src={"/icons/perfect-day.svg"} />
      <ChooseCityLabel>Find Weather of your place</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </SearchBox>
      <ErrorMessage> {error} </ErrorMessage>
      </>
    ):
    (
      <>
      <WelcomeWeatherLogo src={"/icons/perfect-day.svg"} />
      <ChooseCityLabel>Find Weather of your place</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Place"
        />
        <StyledButton type="submit">  Search  </StyledButton>
      </SearchBox>
      </>
    )}
    </>
  );
};
export default CityComponent;
