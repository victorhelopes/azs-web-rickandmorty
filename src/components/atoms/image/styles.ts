import styled from "styled-components";

interface StyledProps {
  size: number;
  avatar?: boolean;
}

export const StyledImage = styled.img<StyledProps>`
  object-fit: cover;
  width: ${(props) => props.size}px;
  border-radius: ${(props) => props.avatar ? '50%' : '0'};
`;
