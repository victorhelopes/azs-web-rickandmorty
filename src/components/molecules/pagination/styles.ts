import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--margin-base) 0;
  gap: var(--margin-xsmall);
`;
export const PageButton = styled.button<{ active: boolean }>`
  background: ${(props) => (props.active ? "var(--primary-color)" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: 1px solid var(--gray-color);
  padding: var(--padding-xsmall) var(--padding-small);
  border-radius: var(--border-radius-xsmall);
  cursor: pointer;
  margin-bottom: var(--margin-xsmall);

  &:hover {
    background: var(--gray-color);
    color: white;
  }
`;

export const Ellipsis = styled.span`
  padding: 0 4px;
  color: var(--gray-color);
`;
