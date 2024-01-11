import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { ThemeProvider } from "styled-components";

import { Table } from "./Table";
import { darkTheme } from "../../../../styles/darkTheme";

describe("Table component", () => {
  it("Should render Table component", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <Table>
          <thead>
            <tr>
              <th>test</th>
              <th>test</th>
              <th>test</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
            </tr>
          </tbody>
        </Table>
      </ThemeProvider>
    );

    const tableElement = await screen.findByTestId("table");
    expect(tableElement).toBeInTheDocument();
  });
});
