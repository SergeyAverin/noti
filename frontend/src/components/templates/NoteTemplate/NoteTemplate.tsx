import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { Note } from "@organisms/Note/Note";
import { INote } from "@redux/types/note";
import { Button } from "@atoms/Button/Button";
import { TrashAlert } from "@organisms/TrashAlert";

interface INoteTemplateProps {
  note: INote;
}

export const NoteTemplate: React.FC<INoteTemplateProps> = ({ note }) => {
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
