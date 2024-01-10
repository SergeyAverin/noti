import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Popup, IPopupProps } from "./Popup";

export default {
  title: "atom/cover/Popup",
  component: Popup,
} as Meta;

const Template: StoryFn<IPopupProps> = (args) => <Popup {...args}>test</Popup>;

export const Default = Template.bind({});
Default.args = {
  closeFunction: () => {
    alert("close");
  },
  children: "test",
};
