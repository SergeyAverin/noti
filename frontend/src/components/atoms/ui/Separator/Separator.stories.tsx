import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Separator, ISeparatorProps } from "./Separator";

export default {
  title: "atom/Separator",
  component: Separator,
  tags: ["autodocs"],
} as Meta<ISeparatorProps>;

const Template: StoryFn<ISeparatorProps> = (args) => (
  <div style={{ width: "150px" }}>
    <Separator {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isHorizontal: true,
};

export const Horizontal: StoryFn<ISeparatorProps> = (args) => (
  <div style={{ width: "100%", justifyContent: "center", alignContent: "center" }}>
    <div>test</div>
    <Separator {...args} />
    <div>test</div>
  </div>
);
Horizontal.args = {
  isHorizontal: true,
};

export const Vertical: StoryFn<ISeparatorProps> = (args) => (
  <div style={{ width: "50px", display: "flex", alignItems: "center" }}>
    <div>test</div>
    <Separator {...args} />
    <div>test</div>
  </div>
);
Vertical.args = {
  isHorizontal: false
}