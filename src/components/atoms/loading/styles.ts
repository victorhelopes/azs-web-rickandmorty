import styled, { keyframes } from "styled-components";

export const LoadingContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const RotatingImage = styled.img`
  animation: ${rotate} 10s linear infinite;
`;