import React from "react";

import AddIcon from "@public/AddIcon.svg";
import { AddNoteStyled } from "./AddNoteStyled";
import { useCreateNoteMutation } from "@redux/api/noteApi";

export const AddNote: React.FC = () => {
  const [createMutation] = useCreateNoteMutation();
  const clickHeandler = () => {
    createMutation({title: 'New note'})
  }
  return (
    <AddNoteStyled onClick={clickHeandler}>
      <AddIcon />
      Add note
    </AddNoteStyled>
  );
};
