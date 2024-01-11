import React from "react";

import { useCleanTrashMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";
import { useTranslation } from "react-i18next";

interface ICleanTrashProps {
  danger?: boolean;
  fill?: boolean;
}

export const CleanTrash: React.FC<ICleanTrashProps> = ({ danger, fill }) => {
  const [cleanTrash] = useCleanTrashMutation();
  const { t } = useTranslation()

  const onClickHeandler = () => {
    cleanTrash();
  };

  return (
    <Button danger={danger} fill={fill} onClick={onClickHeandler}>
      {t('cleanTrash')}
    </Button>
  );
};
