import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Table } from "./Table";

export default {
  title: "atom/cover/Table",
  tags: ["autodocs"],
  component: Table,
} as Meta;

const Template: StoryFn = () => (
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
);

export const Default = Template.bind({});
