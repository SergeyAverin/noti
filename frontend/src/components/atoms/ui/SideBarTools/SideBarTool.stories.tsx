import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { SideBarTool, ISideBarToolProps } from "./SideBarTool";
import { Icon } from "../Icon/Icon";

import AlignCenterIcon from '@public/AlignCenterIcon.svg'

export default {
  title: "atom/SideBarTool",
  component: SideBarTool,
} as Meta;

const Template: StoryFn<ISideBarToolProps> = (args) => (
  <div style={{ width: "150px" }}>
    <SideBarTool {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => {alert('test')},
  text: 'test',
};

export const TextWithIcon = Template.bind({});
TextWithIcon.args = {
  onClick: () => {alert('test')},
  text: 'test',
  icon: <Icon icon={<AlignCenterIcon />} />
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  onClick: () => {alert('test')},
  icon: <Icon icon={<AlignCenterIcon />} />
};
