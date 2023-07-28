import React from "react";
import "normalize.css";

import { ThemeProvider } from "styled-components";

import GlobalStyleStyled from "./styles/globalStyle.styled";
import { darkTheme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <GlobalStyleStyled />
        <h1>React Template</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
