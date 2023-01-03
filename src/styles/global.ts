import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', Inter, Avenir, Helvetica, Arial, sans-serif;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
