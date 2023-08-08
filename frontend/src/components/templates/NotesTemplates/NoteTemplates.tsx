import React from "react";

import { Note } from "@organisms/Note/Note";
import { INote } from "@redux/types/note";


interface INoteTemplatesProps {
  note: INote
}

export const NoteTemplates: React.FC<INoteTemplatesProps> = ({ note }) => {
  return (
    <div>
      <Note note={note} />
    </div>
  );
};
