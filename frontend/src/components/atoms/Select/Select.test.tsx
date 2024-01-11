import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Select } from "./Select";
import { darkTheme } from "../../../styles/darkTheme";
import { BrowserRouter } from "react-router-dom";

describe("Select component", () => {
  it("Should render Select component", async () => {
    let selectedItem: string;
    const selectHandler = (item: string) => {
      selectedItem = item;
    };
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <Select
            items={["Item1", "Item2", "Item3"]}
            selectItem="Item1"
            onSelect={selectHandler}
          />
        </ThemeProvider>
      </BrowserRouter>
    );

    const selectedItemElement = await screen.findByTestId("selected-item");
    let selectItemElements = await screen.findAllByTestId('select-item')
    
    expect(selectedItemElement.textContent).toEqual("Item1");
    
    /*
    await userEvent.click(selectedItemElement);
    selectItemElements = await screen.findAllByTestId('select-item')
    await userEvent.click(selectItemElements[0]);
    expect(selectedItemElement.textContent).toEqual("Item1");

    
    
    await userEvent.click(selectedItemElement);
    selectItemElements = await screen.findAllByTestId('select-item')
    await userEvent.click(selectItemElements[1]);
    expect(selectedItemElement.textContent).toEqual("Item2");
    
    await userEvent.click(selectedItemElement);
    selectItemElements = await screen.findAllByTestId('select-item')
    await userEvent.click(selectItemElements[2]);
    expect(selectedItemElement.textContent).toEqual("Item3");
    */
  });
});
