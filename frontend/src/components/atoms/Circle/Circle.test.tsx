import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Circle } from "./Circle";
import { darkTheme } from "../../../styles/darkTheme";

describe("Circle component", () => {
  it("Should render circle", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <div data-testid="circle-element" >
          <Circle color="red" data-testid="circle-element" />
        </div>
      </ThemeProvider>
    )
    const circleElement = await screen.findByTestId('circle-element')
    expect(circleElement).toBeInTheDocument()
  });
});
