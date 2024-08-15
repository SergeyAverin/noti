import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { EditInput } from "./EditInput";
import { Width } from "../..";

export default {
  title: "atom/EditInput",
  component: EditInput,
} as Meta;

const Template: StoryFn = () => (
  <Width width="150px">
    <EditInput />
  </Width>
);
