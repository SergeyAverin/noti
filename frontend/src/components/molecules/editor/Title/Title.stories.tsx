import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import Title from "./index";
import { ITitleContainerProps } from "./TitleContainer";

export default {
  title: "molecules/editor/Title",
  component: Title,
  tags: ["autodocs"],
} as Meta<ITitleContainerProps>;

const Template: StoryFn<ITitleContainerProps> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  slug: "slug",
  title: "title",
};
