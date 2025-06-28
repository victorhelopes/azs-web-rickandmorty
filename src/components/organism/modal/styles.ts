import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const Content = styled.div`
  background: white;
  border-radius: var(--border-radius-small);
  padding: var(--padding-large);
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const CharacterList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--margin-base);
  margin-top: var(--margin-base);
`;

export const EpisodeInfo = styled.div`
  margin-bottom: var(--margin-base);

  h2 {
    margin: 0;
  }

  p {
    margin: var(--margin-xsmal) 0;
    color: #666;
    font-size: var(--font-size-small);
  }
`;
