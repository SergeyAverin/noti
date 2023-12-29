import React, { PropsWithChildren } from "react";

import { ThemeProvider } from "styled-components";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import GlobalStyleStyled from "./styles/globalStyle.styled";

import { themeSelector } from "@redux/selectors/theme";
import { store } from "@redux/store";
import MainRouter from "./router";

import "normalize.css";
import { setTheme } from "@redux/features/themeSlice";
import { darkTheme } from "./styles/darkTheme";
import { lightTheme } from "./styles/lightTheme";


const Theme: React.FC<PropsWithChildren> = ({ children }) => {
  let themeName = localStorage.getItem("theme");
  let theme = useSelector(themeSelector);
  theme = themeName=='dark'  ? darkTheme : lightTheme;
  
  if (themeName == null) {
    themeName = 'dark'
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
