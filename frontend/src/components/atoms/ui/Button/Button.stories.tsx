import React from "react";
import { StoryFn, Meta } from'@storybook/react'

import { Button, IButtonProps } from "./Button";

export default {
  title: 'atom/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: { 
    onClick: { 
      control: 'select',
      options: ['alertFunction', 'emptyFunction'],
      mapping: {
        alertFunction: ()=> {alert('Click!')},
        emptyFunction: ()=> {},
      },
      action: 'clicked',
    },  
    children: {
      description: "Component's content",
      type: 'string'
    }
  },
  args: {
    children: 'test',
  }
} as Meta<IButtonProps>


const Template: StoryFn<IButtonProps> = (args) =>  <div style={{minWidth: '150px'}}><Button {...args} /></div>

export const Default = Template.bind({})

export const Danger = Template.bind({})
Danger.args = {
  danger: true
}

export const DangerFill = Template.bind({})
DangerFill.args = {
  danger: true,
  fill: true
}

export const Fill = Template.bind({})
Fill.args = {
  fill: true
}
