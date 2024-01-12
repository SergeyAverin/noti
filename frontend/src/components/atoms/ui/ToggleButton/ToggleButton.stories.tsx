import React from "react";
import { StoryFn, Meta } from "@storybook/react";

import { ToggleButton, IToggleButtonProps } from "./ToggleButton";
import { Icon } from "../Icon/Icon";

import TrashIcon from "@public/TrashIcon.svg";
import BookmarkIcon from "@public/BookmarkIcon.svg";

export default {
  title: "atom/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {
    iconEnable: {
      options: ["TrashIcon", "BookmarkIcon"],
      mapping: {
        TrashIcon: <Icon icon={<TrashIcon />} />,
        BookmarkIcon: <Icon icon={<BookmarkIcon />} />,
      },
    },
    iconDisable: {
      options: ["TrashIcon", "BookmarkIcon"],
      mapping: {
        TrashIcon: <Icon icon={<TrashIcon fill={"red"} stroke={"red"} />} />,
        BookmarkIcon: (
          <Icon icon={<BookmarkIcon fill={"red"} stroke={"red"} />} />
        ),
      },
    },
    onDisable: {
      control: "select",
      options: ["alertFunction", "emptyFunction"],
      mapping: {
        alertFunction: () => {
          alert("disable!");
        },
        emptyFunction: () => {},
      },
      action: "clicked",
    },
    onEnable: {
      control: "select",
      options: ["alertFunction", "emptyFunction"],
      mapping: {
        alertFunction: () => {
          alert("enable!");
        },
        emptyFunction: () => {},
      },
      action: "clicked",
    },
  },
} as Meta<IToggleButtonProps>;

const Template: StoryFn<IToggleButtonProps> = (args) => (
  <div style={{ display: "flex", justifyContent: "left" }}>
    <ToggleButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  iconEnable: "TrashIcon",
  iconDisable: "TrashIcon",
  isEnable: false,
};

export const TrashIconToggleButton = Template.bind({});
TrashIconToggleButton.args = {
  iconEnable: "TrashIcon",
  iconDisable: "TrashIcon",
  isEnable: false,
};

export const BookmarkIconToggleButton = Template.bind({});
BookmarkIconToggleButton.args = {
  iconEnable: "BookmarkIcon",
  iconDisable: "BookmarkIcon",
  isEnable: false,
};
