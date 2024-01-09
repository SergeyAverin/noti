import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Wrapper } from "./Wrapper";
import { darkTheme } from "../../../styles/darkTheme";

describe("Spinner Wrapper", () => {
  it("Should render Wrapper component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Wrapper>test</Wrapper>
      </ThemeProvider>
    );

    const wrapperElement = await screen.findByTestId("wrapper");
    expect(wrapperElement).toBeInTheDocument();
  });
});
