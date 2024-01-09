import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Separator, ISeparatorProps } from "./Separator";

export default {
  title: "atom/Separator",
  component: Separator,
  tags: ['autodocs'],
} as Meta<ISeparatorProps>;

const Template: StoryFn<ISeparatorProps> = (args) => (
  <div style={{ width: "50px" }}>
    <Separator {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isHorizontal: true,
};
