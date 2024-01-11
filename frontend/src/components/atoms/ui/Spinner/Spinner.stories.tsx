import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Spinner } from "./Spinner";

export default {
  title: "atom/Spinner",
  tags: ["autodocs"],
  component: Spinner,
} as Meta;

const Template: StoryFn = () => <Spinner />;

export const Default = Template.bind({});
