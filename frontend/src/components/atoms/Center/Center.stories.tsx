import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Center, ICenterProps } from "./Center";

export default {
  title: "atom/Center",
  component: Center,
  tags: ["autodocs"],
  argTypes: {
    horizontal: { type: "boolean" },
    vertical: { type: "boolean" },
    children: {
      description: "Component's content"
    }
  },
} as Meta<ICenterProps>;

const Template: StoryFn<ICenterProps> = (args) => (
  <Center {...args}>Text</Center>
);

export const Default = Template.bind({});
Default.args = {
  horizontal: true,
  vertical: true,
  children: "test",
};
