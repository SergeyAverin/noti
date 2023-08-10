import React from "react";

import AddIcon from "@public/AddIcon.svg";
import { CreateNoteStyled } from "./CreateNoteStyled";
import { useCreateNoteMutation } from "@redux/api/noteApi";

export const CreateNote: React.FC = () => {
  const [createMutation] = useCreateNoteMutation();
  const clickHeandler = () => {
    createMutation({title: 'New note'})
  }
  return (
    <CreateNoteStyled onClick={clickHeandler}>
      <AddIcon />
      Add note
    </CreateNoteStyled>
  );
};
