import styled from "styled-components";

export const Card = styled.div`
    display: flex;  
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--white-color);
    padding: var(--padding-small);
    border-radius: var(--border-radius-small);
    color: var(--black-color);
    gap: var(--margin-xsmall);
    width: 100%;
    max-width: 365px;
    cursor: pointer;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: var(--margin-small);
`;

export const Badge = styled.span`
    display: flex; 
    background-color: var(--gray-color);
    color: var(--black-color);
    padding: var(--padding-xsmall) var(--padding-base);
    border-radius: var(--border-radius-xsmall);
    font-size: var(--font-size-base);
    gap: var(--margin-xsmall);
`