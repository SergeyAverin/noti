import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import React from "react";

import { Button } from "./Button";
import { darkTheme } from "../../../styles/darkTheme";


describe("Button component", () => {
  it("Should render button and changed 'isClicked' flag after click on button", async () => {
    let isClicked = false;

    render(
      <ThemeProvider theme={darkTheme}>
        <Button onClick={() => (isClicked = true)}>
          test
        </Button>
      </ThemeProvider>
    );

    const buttonElement = await screen.findByText("test");
    await userEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(isClicked).toEqual(true);
  });
});
