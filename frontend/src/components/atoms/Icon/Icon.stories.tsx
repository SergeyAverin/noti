import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { Icon as IconComponent, IIconProps } from "./Icon";
import NoteIcon from "../../../../public/NoteIcon.svg";
import SearchIcon from "../../../../public/Search.svg";
import BookmarkIcon from "../../../../public/BookmarkIcon.svg";

export default {
  title: "atom/Icon",
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "ReactNode with svg icon",
      options: ["NoteIcon", "SearchIcon", "BookmarkIcon"],
      mapping: {
        NoteIcon: <NoteIcon />,
        SearchIcon: <SearchIcon />,
        BookmarkIcon: <BookmarkIcon />,
      },
    },
  },

  component: IconComponent,
} as Meta<IIconProps>;

const Template: StoryFn<IIconProps> = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  icon: "NoteIcon",
};
