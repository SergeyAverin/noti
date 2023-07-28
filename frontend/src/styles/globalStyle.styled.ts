import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap');

  body {
    font-family: 'Rubik', sans-serif;
    background: ${(props) => props.theme.color.bg};
    color: ${(props) => props.theme.color.fg};
  }

`;
