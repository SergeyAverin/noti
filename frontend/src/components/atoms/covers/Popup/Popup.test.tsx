import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Popup } from "./Popup";
import { darkTheme } from "../../../../styles/darkTheme";

describe("Popup component", () => {
  it("Should render Popup component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Popup>Test</Popup>
      </ThemeProvider>
    );

    const contentInPopupElement = await screen.findByText("Test");
    expect(contentInPopupElement).toBeInTheDocument();
  });
});
