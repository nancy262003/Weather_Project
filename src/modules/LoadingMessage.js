import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOutAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const LoadingMessage = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #555;
  animation: ${fadeInOutAnimation} 1.5s ease-in-out infinite;
`;

export default LoadingMessage;

