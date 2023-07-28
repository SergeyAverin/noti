import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      fg: string;
      bg: string;
      primary: string;
      secondary: string;
      highlight: string;
      dangerous: string;
    };
  }
}
