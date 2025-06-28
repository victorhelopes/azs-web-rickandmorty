import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  :root {
    font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;

    --primary-color: ${({ theme }) => theme.colors.primary};
    --white-color: ${({ theme }) => theme.colors.white};
    --black-color : ${({ theme }) => theme.colors.black};
    --gray-color: ${({ theme }) => theme.colors.gray};

    --font-family: 'Arial', sans-serif;
    --font-size-xsmall: 8px;
    --font-size-small: 12px;
    --font-size-base: 16px;
    --font-size-large: 20px;
    --font-size-xlarge: 24px;

    --padding-xsmall: 8px;
    --padding-small: 12px;
    --padding-base: 16px;
    --padding-large: 20px;
    --padding-xlarge: 24px;

    --margin-xsmall: 8px;
    --margin-small: 12px;
    --margin-base: 16px;
    --margin-large: 20px;
    --margin-xlarge: 24px;

    --border-radius-xsmall: 4px;
    --border-radius-small: 8px;
    --border-radius-base: 16px;
    --border-radius-large: 20px;
    --border-radius-xlarge: 24px;
  
    .container {
      max-width: 1200px;
      height: 100%;
      margin: 0 auto;
    }
  }    
`