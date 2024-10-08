import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { LinkBG, ILinkBGProps } from "./LinkBG";

export default {
  title: "atom/LinkBG",
  tags: ['autodocs'],
  component: LinkBG,
} as Meta<ILinkBGProps>;

const Template: StoryFn<ILinkBGProps> = (args) => (
    <LinkBG {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: "#",
  text: "test",
};
