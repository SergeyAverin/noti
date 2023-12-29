import React, { PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyleStyled from "./styles/globalStyle.styled";

import { themeSelector } from "@redux/selectors/theme";
import { store } from "@redux/store";
import MainRouter from "./router";

import "normalize.css";


const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  const theme = useSelector(themeSelector)
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Theme>
          <GlobalStyleStyled />
            <DndProvider backend={HTML5Backend}>
              <MainRouter />
            </DndProvider>
        </Theme>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
