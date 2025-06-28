import { LoadingContainer, RotatingImage } from "./styles";


import portalImage from "../../../assets/portal.png";

export const Loading = () => {
  return (
    <LoadingContainer>
      <RotatingImage src={portalImage} width="300px"/>
    </LoadingContainer>
  );
}