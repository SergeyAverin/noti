import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { DropDownMenu, IDropDownMenuProps } from "./DropDownMenu";
import { Icon, Width } from "../..";

import BookmarkIcon from "@public/BookmarkIcon.svg";
import TrashIcon from "@public/TrashIcon.svg";

export default {
  title: "atom/DropDownMenu",
  component: DropDownMenu,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: ["TrashIcon", "BookmarkIcon"],
      mapping: {
        TrashIcon: <Icon icon={<TrashIcon />} />,
        BookmarkIcon: <Icon icon={<BookmarkIcon />} />,
      },
    },
    children: {
      type: 'string',
      description: "Component's content",
    },
  },
} as Meta<IDropDownMenuProps>;

const Template: StoryFn<IDropDownMenuProps> = (args) => (
  <Width width="150px">
    <DropDownMenu {...args} />
  </Width>
);

export const Default = Template.bind({});
Default.args = {
  text: "text",
  children: <div>content</div>,
  isOpenDefaultValue: true,
  icon: <Icon icon={<BookmarkIcon />} />,
};
