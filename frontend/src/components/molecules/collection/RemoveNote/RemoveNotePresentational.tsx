import React from "react";
import { TFunction } from "i18next";

import { Button } from "@atoms/index";

interface IRemoveNotePresentationalProps {
  removeNote: Function;
  t: TFunction;
}

export const RemoveNotePresentational: React.FC<
  IRemoveNotePresentationalProps
> = ({ removeNote, t }) => {
  return (
    <Button danger={true} fill={false} onClick={() => removeNote()}>
      {t("removeTrash")}
    </Button>
  );
};
