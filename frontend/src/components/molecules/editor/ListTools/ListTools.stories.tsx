import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import ListTools from "./index";
import { Flex, Margin } from "@atoms/index";
import styled from "styled-components";

export default {
  title: "molecules/editor/ListTools",
  component: ListTools,
  tags: ["autodocs"],
} as Meta;

const TestEditor = styled.div.attrs({
  contentEditable: true,
  placeholder: "Write text...",
})`
  width: 100%;
  height: 250px;
  overflow-y: auto;
  outline: none;
  border: 1px solid black;
  padding: 15px;
  &:empty:before {
    content: attr(placeholder);
    pointer-events: none;
    display: block;
    color: ${(props) => props.theme.propertyColor.fg.grey};
  }
`;

const Template: StoryFn = () => (
  <>
    <Flex alignItems="center" justifyContent="flex-start">
      <ListTools />
    </Flex>
    <Margin mt={30}>
      <TestEditor />
    </Margin>
  </>
);
export const Default = Template.bind({});
