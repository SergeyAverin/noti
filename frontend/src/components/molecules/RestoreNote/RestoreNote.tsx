import React from "react";

import { useRemoveTrashMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";

interface IRestoreNoteProps {
  slug: string;
}

export const RestoreNote: React.FC<IRestoreNoteProps> = ({ slug }) => {
  const [restoreTrash] = useRemoveTrashMutation();

  const onClickHeandler = (event: React.MouseEvent) => {
    event.preventDefault();
    restoreTrash(slug);
  };

  return (
    <Button danger onClick={onClickHeandler}>
      restoreTrash
    </Button>
  );
};
