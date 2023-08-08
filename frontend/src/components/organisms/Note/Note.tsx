import React from "react";
import { NoteStyled } from "./NoteStyled";
import { Title } from "@molecules/Title";
import { INote } from "@redux/types/note";

interface INoteProps {
  note: INote;
}

export const Note: React.FC<INoteProps> = ({ note }) => {
  return (
    <NoteStyled>
      <Title title={note.title} />
    </NoteStyled>
  );
};
