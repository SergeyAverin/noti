import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import {ErrorText } from "./ErrorText";
import { darkTheme } from "../../../styles/darkTheme";

describe("ErrorText component", () => {
  it("Should render ErrorText component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <ErrorText>test</ErrorText>
      </ThemeProvider>
    );
    const errorTextElement = screen.getByText("test");
    expect(errorTextElement).toBeInTheDocument();
  });
});
