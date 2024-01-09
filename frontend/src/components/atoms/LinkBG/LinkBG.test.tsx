import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import React from "react";

import { LinkBG } from "./LinkBG";
import { darkTheme } from "../../../styles/darkTheme";
import { BrowserRouter, useLocation } from "react-router-dom";

describe("LinkBG component", () => {
  it("Should render LinkBG and changed URL after click on button", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <LinkBG href="/test" text="test" />
        </ThemeProvider>
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText("test");

    expect(window.location.pathname).not.toEqual("/test");

    await userEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(window.location.pathname).toEqual("/test");
  });
});
