import React from "react";
import { useTheme } from "styled-components";

import { AddBookmarkPresentational } from "./AddBookmarkPresentational";
import { useAddBookmark } from "./hooks/useAddBookmark";
import { INote } from "@redux/types/note";

interface IAddBookmarkContainerProps {
  note: INote;
}

/** This component add or remove note from bookmarks */
export const AddBookmarkContainer: React.FC<IAddBookmarkContainerProps> = ({
  note,
}) => {
  const [addBookmark, removeBookmark] = useAddBookmark(note.slug);
  const theme = useTheme();

  return (
    <AddBookmarkPresentational
      addBookmark={addBookmark}
      removeBookmark={removeBookmark}
      isEnable={note.isBookmark}
      theme={theme}
    />
  );
};
