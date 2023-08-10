import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { INote } from "@redux/types/note";
import { Note } from "@organisms/Note/Note";
import { TrashAlert } from "@organisms/TrashAlert";

interface INotePageTemplateProps {
  note: INote;
}

export const NotePageTemplate: React.FC<INotePageTemplateProps> = ({ note }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Note note={note} />
      { note.isTrash &&
      <TrashAlert note={note} />
       }
    </div>
  );
};
