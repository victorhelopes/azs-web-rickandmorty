import styled from "styled-components";

export const StyledCharacterCard = styled.div`
  background: var(--white-color);
  border-radius: var(--border-radius-small);
  padding: var(--padding-small);
  display: flex;
  gap: var(--margin-small);
  align-items: center;

  strong {
    display: block;
    font-size: var(--font-size-medium);
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #555;
  }
`;


export const Body = styled.div`
  display: flex;  
  flex-direction: column;
`;
