import React from "react";
import { StoryFn, Meta } from'@storybook/react'

import { Button, IButtonProps } from "./Button";

export default {
  title: 'atom/Button',
  component: Button,
} as Meta


const Template: StoryFn<IButtonProps> = (args) =>  <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: ()=> {alert('Click')},
  children: 'test'
}

export const Danger = Template.bind({})
Danger.args = {
  onClick: ()=> {alert('Click')},
  children: 'test',
  danger: true
}

export const DangerFill = Template.bind({})
DangerFill.args = {
  onClick: ()=> {alert('Click')},
  children: 'test',
  danger: true,
  fill: true
}

export const Fill = Template.bind({})
Fill.args = {
  onClick: ()=> {alert('Click')},
  children: 'test',
  fill: true
}
