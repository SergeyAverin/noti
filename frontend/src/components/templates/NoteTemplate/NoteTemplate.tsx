import React from "react";

import { Note } from "@organisms/Note/Note";
import { INote } from "@redux/types/note"

interface INoteTemplateProps {
  note: INote
}

export const NoteTemplate: React.FC<INoteTemplateProps> = ({ note }) => {
  return (
    <div>
      <Note note={note} />
    </div>
  );
};
