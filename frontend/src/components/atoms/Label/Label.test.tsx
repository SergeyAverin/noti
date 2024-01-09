import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ThemeProvider } from "styled-components";
import React from "react";

import { Label } from "./Label";
import { darkTheme } from "../../../styles/darkTheme";


describe("Label component", () => {
  it("Should render Label and changed 'isClicked' flag after click on Label", async () => {
    let isClicked = false;

    render(
      <ThemeProvider theme={darkTheme}>
        <Label onClick={() => (isClicked = true)}>
          test
        </Label>
      </ThemeProvider>
    );

    const buttonElement = await screen.findByText("test");
    await userEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(isClicked).toEqual(true);
  });
});
