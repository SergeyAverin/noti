import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Center } from "./Center";
import { darkTheme } from "../../../styles/darkTheme";


describe("Center component", () => {
  it("should render center component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Center>test</Center>
      </ThemeProvider>
    )
    const centerElement = screen.getByText('test')
    expect(centerElement).toBeInTheDocument()
  });
});
