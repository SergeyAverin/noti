import React from "react";

import AddIcon from "@public/AddIcon.svg";
import { CreateNoteStyled } from "./CreateNoteStyled";
import { Button, Flex, Width } from "@atoms/index";
import { useCreateNoteMutation } from "@redux/api/noteApi";

export const CreateNote: React.FC = () => {
  const [createMutation] = useCreateNoteMutation();
  const clickHeandler = () => {
    createMutation({title: 'New note'})
  }
  return (
    <Width width="100%">
      <Button onClick={clickHeandler}>
        <Flex justifyContent="center" alignItems="center">
          <AddIcon />
            Add note
        </Flex>
      </Button>
    </Width>
  );
};
