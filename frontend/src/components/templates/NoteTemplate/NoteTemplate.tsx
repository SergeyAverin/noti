import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { Note } from "@organisms/Note/Note";
import { INote } from "@redux/types/note";
import { Button } from "@atoms/Button/Button";
import { TrashMessage } from "@organisms/TrashMessage";

interface INoteTemplateProps {
  note: INote;
}

export const NoteTemplate: React.FC<INoteTemplateProps> = ({ note }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Note note={note} />
      { note.isTrash &&
      <TrashMessage note={note} />
       }
    </div>
  );
};
