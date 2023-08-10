import React from "react";

import { useCleanTrashMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";

interface ICleanTrashProps {
  danger?: boolean;
  fill?: boolean;
}

export const CleanTrash: React.FC<ICleanTrashProps> = ({ danger, fill }) => {
  const [cleanTrash] = useCleanTrashMutation();

  const onClickHeandler = () => {
    cleanTrash();
  };

  return (
    <Button danger={danger} fill={fill} onClick={onClickHeandler}>
      Clean trash
    </Button>
  );
};
