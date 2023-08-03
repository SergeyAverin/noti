import React from "react";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyleStyled from "./styles/globalStyle.styled";
import { darkTheme } from "./styles/theme";
import { store } from "./redux/store";
import MainRouter from "./router";

import "normalize.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyleStyled />
            <MainRouter />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
