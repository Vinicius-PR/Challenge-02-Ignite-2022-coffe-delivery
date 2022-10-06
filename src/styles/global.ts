import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  body {
    padding-bottom: 4rem;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87,50%;
    }
  }
`
