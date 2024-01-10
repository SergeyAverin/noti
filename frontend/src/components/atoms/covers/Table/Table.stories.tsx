import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Table } from "./Table";

export default {
  title: "atom/cover/Table",
  component: Table,
} as Meta;

const Template: StoryFn = () => (
  <Table style={{width: '150px'}}>
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
