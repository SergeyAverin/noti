import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { INote } from "@redux/types/note";
import { ToggleButton } from "@atoms/ToggleButton/ToggleButton";
import BookmarkIcon from "@public/BookmarkIcon.svg";
import {
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} from "@redux/api/libraryApi";
import { Icon } from "@atoms/index";

interface IAddBookmarkProps {
  note: INote;
}

export const AddBookmark: React.FC<IAddBookmarkProps> = ({ note }) => {
  const theme = useContext(ThemeContext);
  const [addBookmark] = useAddBookmarkMutation();
  const [removeBookmark] = useRemoveBookmarkMutation();

  const onDisable = async (isEnable: boolean) => {
    await removeBookmark(note.slug);
  };
  const onEnable = async (isDisable: boolean) => {
    await addBookmark(note.slug);
  };

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
      isEnable={note.isBookmark}
      onDisable={onDisable}
      onEnable={onEnable}
    />
  );
};
