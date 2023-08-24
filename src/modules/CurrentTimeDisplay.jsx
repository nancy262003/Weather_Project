import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CurrentTime = styled.div`
  font-size: 25px;
  color: #555;
  margin-top: 10px;
  font-weight:bold;
`;

const CurrentTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <CurrentTime>{currentTime.toLocaleTimeString()}</CurrentTime>
  );
};

export default CurrentTimeDisplay;
