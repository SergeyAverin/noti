/** @type { import('@storybook/react').Preview } */
import React, { Suspense } from "react";
import { StoryFn } from '@storybook/react'
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { enableMocking } from '../src/mocks/index'
import GlobalStyleStyled from "../src/styles/globalStyle.styled";
import { darkTheme } from "../src/styles/darkTheme";
import { coffeeTheme } from "../src/styles/coffeeTheme";
import { lightTheme } from "../src/styles/lightTheme";
import { store } from "../src/redux/store";


enableMocking()

const preview  = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      toc: {
        title: 'Table of Contents',
        headingSelector: 'h1, h2, h3',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story: StoryFn) => (
    <Suspense fallback="loading">
      <Story />
    </Suspense>
  ),
  (Story: StoryFn) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
  (Story: StoryFn) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
      coffee: coffeeTheme,
    },
    defaultTheme: "dark",
    Provider: ThemeProvider,
    GlobalStyles: GlobalStyleStyled,
  }),
];
