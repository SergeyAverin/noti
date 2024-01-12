import React from "react";
import { TFunction } from "i18next";

import { Button } from "@atoms/index";

interface IRestoreNoteProps {
  t: TFunction;
  restoreNote: Function;
}

export const RestoreNotePresentational: React.FC<IRestoreNoteProps> = ({
  restoreNote,
  t,
}) => {
  return (
    <Button danger={true} fill={false} onClick={() => restoreNote()}>
      {t("restoreTrash")}
    </Button>
  );
};
