import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ErrorText } from "./ErrorText";

export default {
  title: "atom/ErrorText",
  component: ErrorText,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Component's content",
    },
  },
} as Meta<React.PropsWithChildren>;

const Template: StoryFn<React.PropsWithChildren> = (args) => (
  <ErrorText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "ErrorText",
};
