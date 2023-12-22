import React from "react";

import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
            <DndProvider backend={HTML5Backend}>
              <MainRouter />
            </DndProvider>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
