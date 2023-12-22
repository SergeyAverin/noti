import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      fg: string;
      bg: string;
      primary: string;
      secondary: string;
      highlight: string;
      highlightFaded: string;
      dangerous: string;
    };
    propertyColor: {
      bg: {
        grey: string;
        brown: string;
        orange: string;
        yellow: string;
        green: string;
        blue: string;
        purple: string;
        pink: string;
        red: string;
      };
      fg: {
        grey: string;
        brown: string;
        orange: string;
        yellow: string;
        green: string;
        blue: string;
        purple: string;
        pink: string;
        red: string;
      };
    };
    panelsSize: {
      sideBarSize: string;
      headerSize: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      headlineSmall: string;
      headlineMedium: string;
      headlineLarge: string;
    };
  }
}
