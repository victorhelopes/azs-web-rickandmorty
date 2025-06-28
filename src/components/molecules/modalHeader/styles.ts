import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: var(--padding-small);
    margin-bottom: var(--margin-small);
    h2 {
        margin: 0;
        font-size: var(--font-size-large);
    }
`;