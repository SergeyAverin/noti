import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Margin } from "./Margin";
import { darkTheme } from "../../../styles/darkTheme";

describe("Margin component", () => {
  it("Should render Margin component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Margin>
          <div>1</div>
        </Margin>
      </ThemeProvider>
    );

    const marginElement = screen.getByText("1");
    expect(marginElement).toBeInTheDocument();
  });
});
