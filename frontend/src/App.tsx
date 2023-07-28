import React from "react";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import GlobalStyleStyled from "./styles/globalStyle.styled";
import { darkTheme } from "./styles/theme";
import { store } from "./redux/store";

import "normalize.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <GlobalStyleStyled />
          <h1>React Template</h1>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
