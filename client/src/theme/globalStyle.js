import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap");

  body {
    font-family: 'Lato', sans-serif;
  }
`;

export { GlobalStyle };