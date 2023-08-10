import React from "react";

import { useCleanTrashMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";

export const CleanNote: React.FC = () => {
  const [cleanTrash] = useCleanTrashMutation();

  const onClickHeandler = () => {
    cleanTrash();
  };

  return (
    <Button danger fill onClick={onClickHeandler}>
      Clean trash
    </Button>
  );
};
