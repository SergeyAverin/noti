import { DefaultTheme } from "styled-components";

export const coffeeTheme: DefaultTheme = {
  color: {
    fg: "#FFFFFF",
    bg: "#2D2424",
    primary: "#221B1B",
    secondary: "#171212",
    highlight: "#B85C38",
    highlightFaded: "rgba(184, 92, 56, 0.1)",
    dangerous: "#E76161",
  },
  propertyColor: {
    bg: {
      grey: "#F1F1EF",
      brown: "#E0CECE",
      orange: "#F3CCA5",
      yellow: "#F3E1AB",
      green: "#D0F3CA",
      blue: "#C8EDFD",
      purple: "#DEC9F3",
      pink: "#ECB0CB",
      red: "#D35A61",
    },
    fg: {
      grey: "#787774",
      brown: "#9F6B53",
      orange: "#F28A21",
      yellow: "#EAE110",
      green: "#4C8968",
      blue: "#3982AB",
      purple: "#9065B0",
      pink: "#C24D8B",
      red: "#D44C47",
    },
  },
  panelsSize: {
    sideBarSize: "300px",
    headerSize: "80px",
  },
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "18px",
    headlineSmall: "24px",
    headlineMedium: "28px",
    headlineLarge: "32px",
  },
};
