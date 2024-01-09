import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Circle, ICircleProps } from "./Circle";

export default {
  title: "atom/Circle",
  tags: ["autodocs"],
  component: Circle,
} as Meta<ICircleProps>;

const Template: StoryFn<ICircleProps> = (args) => <Circle {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "red",
};
