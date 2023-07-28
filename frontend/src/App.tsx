import React from "react";
import 'normalize.css'

import { ThemeProvider } from "styled-components";

import GlobalStyleStyled from "./styles/globalStyle.styled";

const App = () => {
  return (
    <div className="App">
      <GlobalStyleStyled />
      <h1>React Template</h1>
    </div>
  );
};

export default App;
