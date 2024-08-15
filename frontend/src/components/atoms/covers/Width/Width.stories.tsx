import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Width, IWidthProps } from "./Width";
import styled from "styled-components";

export default {
  title: "atom/cover/Width",
  component: Width,
  tags: ["autodocs"],
} as Meta<IWidthProps>;

const FillBox = styled.div`
  width: 100%;
  height: 50px;
  background: red;
`;

const Template: StoryFn<IWidthProps> = (args) => (
  <Width {...args}>
    <FillBox />
  </Width>
);

export const Default = Template.bind({});
Default.args = {
  width: "100%",
};
