import "styled-components";

import { IPropertyColor } from "@styles/propertyColors";

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
      bg: IPropertyColor;
      fg: IPropertyColor;
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
