import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--margin-base);
  flex-wrap: wrap;
  gap: var(--margin-small);
  padding: var(--padding-base);
  background: var(--white-color);
  border-bottom: 1px solid #ddd;

  input {
    flex: 1;
  }
`;
