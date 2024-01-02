import React from "react";

import { useRemoveTrashMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";
import { useTranslation } from "react-i18next";

interface IRestoreNoteProps {
  slug: string;
  danger?: boolean;
  fill?: boolean;
}

export const RestoreNote: React.FC<IRestoreNoteProps> = ({
  slug,
  danger,
  fill,
}) => {
  const [restoreTrash] = useRemoveTrashMutation();

  const onClickHeandler = (event: React.MouseEvent) => {
    event.preventDefault();
    restoreTrash(slug);
  };

  const { t } = useTranslation()

  return (
    <Button danger={danger} fill={fill} onClick={onClickHeandler}>
      {t('restoreTrash')}
    </Button>
  );
};
