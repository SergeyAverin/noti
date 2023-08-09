import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { Note } from "@organisms/Note/Note";
import { INote } from "@redux/types/note";
import { Button } from "@atoms/Button/Button";

interface INoteTemplateProps {
  note: INote;
}

export const NoteTemplate: React.FC<INoteTemplateProps> = ({ note }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <Note note={note} />
    </div>
  );
};
