import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { NoteLink, INoteLinkProps } from "./NoteLink";

import NoteIcon from "@public/NoteIcon.svg";
import SearchIcon from "@public/Search.svg";
import BookmarkIcon from "@public/BookmarkIcon.svg";

export default {
  title: "atom/NoteLink",
  tags: ["autodocs"],
  component: NoteLink,
  argTypes: {
    children: {
      description: "Component's content",
    },
    icon: {
      description: "ReactNode with svg icon",
      options: ["NoteIcon", "SearchIcon", "BookmarkIcon"],
      defaultValue: "NoteIcon",
      mapping: {
        NoteIcon: <NoteIcon />,
        SearchIcon: <SearchIcon />,
        BookmarkIcon: <BookmarkIcon />,
      },
    },
  },
} as Meta<INoteLinkProps>;

const Template: StoryFn<INoteLinkProps> = (args) => (
  <BrowserRouter>
    <NoteLink {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  href: "#",
  children: "test",
  icon: "NoteIcon",
};
