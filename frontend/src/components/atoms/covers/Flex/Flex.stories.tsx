import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import styled from "styled-components";

import { Flex, IFlexProps } from "./Flex";

const justifyContentOption = [
  "flex-end",
  "flex-start",
  "center",
  "space-around",
  "space-between",
  "start",
  "right",
  "left",
  "end",
];

const alignItemsOption = [
  "flex-end",
  "flex-start",
  "baseline",
  "stretch",
  "center",
];

export default {
  title: "atom/cover/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    flexDirection: {
      options: ["row", "column"],
      control: { type: "radio" },
    },
    justifyContent: {
      options: justifyContentOption,
      control: { type: "radio" },
    },
    alignItems: {
      options: alignItemsOption,
      control: { type: "radio" },
    },
  },
} as Meta;

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
  color: ${(props) => props.theme.color.fg};
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Template: StoryFn<IFlexProps> = (args) => (
  <Wrapper>
    <Flex {...args}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  alignItems: "center",
  justifyContent: "flex-start",
  flexDirection: "row",
};
