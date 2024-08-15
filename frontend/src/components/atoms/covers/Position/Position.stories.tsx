import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import styled from "styled-components";

import { Position, IPositionProps } from "./Position";

const positionOption = ["absolute", "fixed", "relative", "static", "sticky"];

export default {
  title: "atom/cover/Position",
  component: Position,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      description: "Component's content",
    },
    position: {
      options: positionOption,
      control: { type: "radio" },
    },
  },
} as Meta<IPositionProps>;

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

const Template: StoryFn<IPositionProps> = (args) => (
  <div style={{ position: "relative", width: "100%", height: "100%" }}>
    <Position {...args}>
      <Box />
    </Position>
  </div>
);

export const Default = Template.bind({});
