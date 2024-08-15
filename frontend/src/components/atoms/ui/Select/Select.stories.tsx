import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Select, ISelectProps } from "./Select";

export default {
  title: "atom/Select",
  tags: ["autodocs"],
  component: Select,
  argTypes: {
    onSelect: {
      control: "select",
      options: ["alertFunction", "emptyFunction"],
      mapping: {
        alertFunction: (selected: string) => {
          alert(`Selected item ${selected}!`);
        },
        emptyFunction: () => {},
      },
      action: "selected",
    },
  },
} as Meta<ISelectProps>;

const Template: StoryFn<ISelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ["Item1", "Item2", "Item3"],
  selectItem: "Item1",
};
