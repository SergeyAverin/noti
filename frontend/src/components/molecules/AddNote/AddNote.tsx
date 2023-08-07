import React from "react";

import AddIcon from "@public/AddIcon.svg";
import { AddNoteStyled } from "./AddNoteStyled";

export const AddNote: React.FC = () => {
  return (
    <AddNoteStyled>
      <AddIcon />
      Add note
    </AddNoteStyled>
  );
};
