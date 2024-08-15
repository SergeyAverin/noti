import React from "react";
import { DefaultTheme } from "styled-components";

import { Icon, ToggleButton } from "@atoms/index";

import BookmarkIcon from "@public/BookmarkIcon.svg";

interface IAddBookmarkPresentationalProps {
  theme: DefaultTheme;
  isEnable: boolean;
  addBookmark: Function;
  removeBookmark: Function;
}

export const AddBookmarkPresentational: React.FC<
  IAddBookmarkPresentationalProps
> = ({ theme, isEnable, addBookmark, removeBookmark }) => {
  return (
    <ToggleButton
      iconDisable={<Icon icon={<BookmarkIcon stroke={theme?.color.fg} />} />}
      iconEnable={
        <Icon
          icon={
            <BookmarkIcon
              fill={theme?.color.highlight}
              stroke={theme?.color.highlight}
            />
          }
        />
      }
      isEnable={isEnable}
      onDisable={removeBookmark}
      onEnable={addBookmark}
    />
  );
};
