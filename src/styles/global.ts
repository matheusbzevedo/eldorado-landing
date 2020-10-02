import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 700 1.6rem 'Dolce Vita', sans-serif;
  }

  body, input, button, textarea {
    font: 700 1.6rem 'Dolce Vita';
  }

  @font-face {
    font-family: 'Dolce Vita';
    src: url('./fonts/Dolce Vita.ttf') format('truetype'),
      url('./fonts/Dolce Vita Light.ttf') format('truetype'),
      url('./fonts/Dolce Vita Heavy Bold.ttf') format('truetype');
    font-display: swap;
  }
`;
