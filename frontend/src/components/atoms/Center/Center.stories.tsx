import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Center, ICenterProps } from "./Center";

export default {
  title: "atom/Center",
  component: Center,
  argTypes: {
    theme: { disable: true },
  },
} as Meta;

const Template: StoryFn<ICenterProps> = (args) => (
  <Center {...args}>Text</Center>
);

export const Default = Template.bind({});
Default.args = {
  horizontal: true,
  vertical: true,
};
