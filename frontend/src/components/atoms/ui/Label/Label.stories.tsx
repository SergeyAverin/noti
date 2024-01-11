import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Label, ILabelProps } from "./Label";

export default {
  title: "atom/Label",
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: "Component's content",
    },
    onClick: { 
      control: 'select',
      options: ['alertFunction', 'emptyFunction'],
      mapping: {
        alertFunction: ()=> {alert('Click!')},
        emptyFunction: ()=> {},
      },
      action: 'clicked',
    },  
  },
} as Meta<ILabelProps>;

const Template: StoryFn<ILabelProps> = (args) => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Label",
  htmlFor: ''
};
