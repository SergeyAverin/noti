import React, { PropsWithChildren, Suspense } from "react";

import { ThemeProvider } from "styled-components";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyleStyled from "./styles/globalStyle.styled";

import { themeSelector } from "@redux/selectors/theme";
import { store } from "@redux/store";
import MainRouter from "./router";
import { themeDict } from "./styles/themeDict";

import './i18n'
import "normalize.css";
import { setTheme } from "@redux/features/themeSlice";


const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  let themeName = localStorage.getItem("theme");
  let theme = useSelector(themeSelector);
  
  if (themeName == null) {
    themeName = 'dark'
  } else {
    theme = themeDict[themeName];
  }
  const dispatch = useDispatch()

  dispatch(setTheme({theme, themeName}))

  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}

const App: React.FC = () => {

  return (
    <Suspense fallback="loading">
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
    </Suspense>
  );
};

export default App;
