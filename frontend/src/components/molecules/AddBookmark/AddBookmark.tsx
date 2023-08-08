import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useParams } from "react-router-dom";

import { ToggleButton } from "@atoms/ToggleButton/ToggleButton";
import BookmakrIcon from "@public/BookmarkIcon.svg";
import {
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} from "@redux/api/libraryApi";

export const AddBookmark: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [addBookmark] = useAddBookmarkMutation();
  const [removeBookmark] = useRemoveBookmarkMutation();
  const slug = useParams().slug as string;

  const onDisable = async (isEnable: boolean) => {
    await removeBookmark(slug);
  };
  const onEnable = async (isDisable: boolean) => {
    await addBookmark(slug);
  };

  return (
    <ToggleButton
      iconDisable={<BookmakrIcon stroke={theme?.color.fg} />}
      iconEnable={
        <BookmakrIcon
          fill={theme?.color.highlight}
          stroke={theme?.color.highlight}
        />
      }
      isEnable={false}
      onDisable={onDisable}
      onEnable={onEnable}
    />
  );
};
