import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Separator } from "./Separator";
import { darkTheme } from "../../../../styles/darkTheme";

describe("Separator component", () => {
  it("Should render Separator component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Separator />
      </ThemeProvider>
    );

    const separatorElement = await screen.findByTestId("separator");
    expect(separatorElement).toBeInTheDocument();
  });
});
