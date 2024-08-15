import React from "react";
import { TFunction } from "i18next";

import { Button } from "@atoms/index";

interface ICleanTrashPresentationalProps {
  cleanTrash: Function;
  t: TFunction;
}

export const CleanTrashPresentational: React.FC<
  ICleanTrashPresentationalProps
> = ({ cleanTrash, t }) => {
  return (
    <Button danger={true} fill={false} onClick={() => cleanTrash()}>
      {t("cleanTrash")}
    </Button>
  );
};
