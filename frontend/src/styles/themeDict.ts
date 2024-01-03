import { DefaultTheme } from "styled-components/dist/types";

import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";
import { coffeeTheme } from "./coffeeTheme";

export const themeDict: Record<string, DefaultTheme> = {
  dark: darkTheme,
  light: lightTheme,
  coffee: coffeeTheme,
};
