/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from "styled-components";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import GlobalStyleStyled from "../src/styles/globalStyle.styled";
import { darkTheme } from "../src/styles/darkTheme";
import { coffeeTheme } from "../src/styles/coffeeTheme";
import { lightTheme } from "../src/styles/lightTheme";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
