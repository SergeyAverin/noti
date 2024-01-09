import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Flex } from "./Flex";
import { darkTheme } from "../../../styles/darkTheme";

describe("Flex component", () => {
  it("Should render Flex component and content of this component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Flex>
      </ThemeProvider>
    );

    const div1 = await screen.findByText("1");
    const div2 = await screen.findByText("2");
    const div3 = await screen.findByText("3");

    expect(div1).toBeInTheDocument();
    expect(div2).toBeInTheDocument();
    expect(div3).toBeInTheDocument();
  });
});
