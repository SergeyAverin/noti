import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Popup, IPopupProps } from "./Popup";

export default {
  title: "atom/cover/Popup",
  component: Popup,
  argTypes: {
    onClose: { 
      control: 'select',
      options: ['alertFunction', 'emptyFunction'],
      mapping: {
        alertFunction: ()=> {alert('Closed!')},
        emptyFunction: ()=> {},
      },
      action: 'closed popup',
    },  
    children: {
      description: "Component's content",
    },
  },
} as Meta<IPopupProps>;

const Template: StoryFn<IPopupProps> = (args) => <Popup {...args}>test</Popup>;

export const Default = Template.bind({});
Default.args = {
  children: "test",
};
