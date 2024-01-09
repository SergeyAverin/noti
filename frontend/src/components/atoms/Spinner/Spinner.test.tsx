import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Spinner } from "./Spinner";
import { darkTheme } from "../../../styles/darkTheme";

describe("Spinner component", () => {
  it("Should render Spinner component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Spinner />
      </ThemeProvider>
    );

    const separatorElement = await screen.findByTestId("spinner");
    expect(separatorElement).toBeInTheDocument();
  });
});
