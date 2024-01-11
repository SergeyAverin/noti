import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { NoteLink } from "./NoteLink";
import { darkTheme } from "../../../../styles/darkTheme";
import { BrowserRouter } from "react-router-dom";

describe("NoteLink component", () => {
  it("Should render NoteLink component and changed URL after click on NoteLink", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <NoteLink href="/test">Link</NoteLink>
        </ThemeProvider>
      </BrowserRouter>
    );

    const buttonElement = await screen.findByText("Link");

    expect(window.location.pathname).not.toEqual("/test");

    await userEvent.click(buttonElement);

    expect(buttonElement).toBeInTheDocument();
    expect(window.location.pathname).toEqual("/test");
  });
});
