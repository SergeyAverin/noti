import React from "react";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import GlobalStyleStyled from "./styles/globalStyle.styled";
import { darkTheme } from "./styles/theme";
import { store } from "./redux/store";
import MainRouter from "./router";

import "normalize.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
          <GlobalStyleStyled /> 
          <div className="App">
            <MainRouter />
          </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
