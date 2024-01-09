import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Wrapper } from "./Wrapper";

export default {
  title: "atom/Wrapper",
  tags: ["autodocs"],
  component: Wrapper,
  argTypes: {
    children: {
      description: "Component's content",
      type: "string",
    },
  },
} as Meta<React.PropsWithChildren>;

const Template: StoryFn<React.PropsWithChildren> = (args) => (
  <Wrapper {...args} />
);

export const Default = Template.bind({});
