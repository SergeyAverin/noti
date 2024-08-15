import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Position } from "./Position";
import { darkTheme } from "../../../../styles/darkTheme";

describe("Position component", () => {
  it("Should render Position component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Position position="absolute">Test</Position>
      </ThemeProvider>
    );

    const positionElement = await screen.findByTestId("position");
    expect(positionElement).toBeInTheDocument();
  });
});
