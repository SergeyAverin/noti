import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import styled from "styled-components";

import { Margin, IMarginProps } from "./Margin";

export default {
  title: "atom/Margin",
  tags: ["autodocs"],
  component: Margin,
  argTypes: {
    mt: {
      type: "number",
      defaultValue: 0
    },
    ml: {
      type: "number",
      defaultValue: 15
    },
    mb: {
      type: "number",
      defaultValue: 0
    },
    mr: {
      type: "number",
      defaultValue: 0
    },
  },
} as Meta<IMarginProps>;

const Box = styled.div`
  border: 1px solid red;
  padding: 25px;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Template: StoryFn<IMarginProps> = (args) => (
  <>
    <Margin {...args}>
      <Box />
    </Margin>
  </>
);

export const Default = Template.bind({});
Default.args = {
  ml: 15,
};
