import React from "react";

import { Button, Flex, Width } from "@atoms/index";
import { useCreateNoteMutation } from "@redux/api/noteApi";
import { CreateNoteStyle } from "./CreateNoteStyled";

import AddIcon from "@public/AddIcon.svg";

export const CreateNote: React.FC = () => {
  const [createMutation] = useCreateNoteMutation();
  const clickHeandler = () => {
    createMutation({title: 'New note'})
  }
  return (
    <Width width="100%">
      <CreateNoteStyle  onClick={clickHeandler}>
        <AddIcon />
        Add note
      </CreateNoteStyle>
    </Width>
  );
};
