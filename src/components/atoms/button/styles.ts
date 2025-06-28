import styled, { css } from "styled-components";

interface StyledButtonProps {
  $variant?: "default" | "outlined" | "icon";
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.2s;

  ${({ $variant, theme }) => {
    switch ($variant) {
      case "outlined":
        return css`
          background: transparent;
          border: 2px solid ${theme.colors.primary};
          color: ${theme.colors.primary};
        `;
      case "icon":
        return css`
          background: transparent;
          padding: 0.25rem;
          border: none;
          color: ${theme.colors.primary};
          &:hover {
            background-color: ${theme.colors.gray};
          }
        `;
      default:
        return css`
          background: ${theme.colors.primary};
          color: white;
        `;
    }
  }}
`;
