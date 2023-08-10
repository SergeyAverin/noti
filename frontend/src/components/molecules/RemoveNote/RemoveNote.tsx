import React from "react";

import { useRemoveNoteMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";

interface IRemoveNoteProps {
  slug: string;
}

export const RemoveNote: React.FC<IRemoveNoteProps> = ({ slug }) => {
  const [removeTrash] = useRemoveNoteMutation();

  const onClickHeandler = (event: React.MouseEvent) => {
    event.preventDefault();
    removeTrash(slug);
  };

  return (
    <Button danger onClick={onClickHeandler}>
      removeTrash
    </Button>
  );
};
