import React from "react";

import { useRemoveNoteMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";

interface IRemoveNoteProps {
  slug: string;
  danger?: boolean;
  fill?: boolean;
}

export const RemoveNote: React.FC<IRemoveNoteProps> = ({
  slug,
  danger,
  fill,
}) => {
  const [removeTrash] = useRemoveNoteMutation();

  const onClickHeandler = (event: React.MouseEvent) => {
    event.preventDefault();
    removeTrash(slug);
  };

  return (
    <Button danger={danger} fill={fill} onClick={onClickHeandler}>
      removeTrash
    </Button>
  );
};
