import React from "react";
import { useTheme } from "styled-components";

import { AddTrashPresentational } from "./AddTrashPresentational";
import { useAddTrash } from "./hooks/useAddTrash";
import { INote } from "@redux/types/note";

interface IAddTrashContainerProps {
  note: INote;
}

/** This component add or remove note from trash */
export const AddTrashContainer: React.FC<IAddTrashContainerProps> = ({
  note,
}) => {
  const theme = useTheme();
  const [addBookmark, removeBookmark] = useAddTrash(note.slug);

  return (
    <AddTrashPresentational
      addBookmark={addBookmark}
      removeBookmark={removeBookmark}
      isEnable={note.isBookmark}
      theme={theme}
    />
  );
};
