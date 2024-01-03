import React from "react";

import { useRemoveNoteMutation } from "@redux/api/libraryApi";
import { Button } from "@atoms/index";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation()

  return (
    <Button danger={danger} fill={fill} onClick={onClickHeandler}>
      {t('removeTrash')}
    </Button>
  );
};
