import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Width } from "./Width";
import { darkTheme } from "../../../../styles/darkTheme";

describe("Width component", () => {
  it("Should render Width component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Width width="40px" />
      </ThemeProvider>
    );

    const widthElement = await screen.findByTestId("width");
    expect(widthElement).toBeInTheDocument();
  });
});
