import type { ReactNode } from "react";
import styled from "styled-components";

interface TextProps {
  children: ReactNode;
  size?: number; // tamanho da fonte em px
  color?: string;
  weight?: "normal" | "bold" | number;
  align?: "left" | "center" | "right";
  className?: string;
}

const StyledText = styled.span<{
  size: number;
  color: string;
  weight: string | number;
  align: string;
}>`
  font-size: ${({ size }) => size}px;
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  display: inline-block;
`;

export const Text = ({
  children,
  size = 16,
  color = "#000",
  weight = "normal",
  align = "left",
  className,
}: TextProps) => {
  return (
    <StyledText
      size={size}
      color={color}
      weight={weight}
      align={align}
      className={className}
    >
      {children}
    </StyledText>
  );
};
