import React from "react";
import { useTranslation } from "react-i18next";

import { TrashAlertPresentational } from "./TrashAlertPresentational";
import { INote } from "@redux/types/note";

interface ITrashAlertComponentProps {
  note: INote;
}

/** This component show when note in trash */
export const TrashAlertComponent: React.FC<ITrashAlertComponentProps> = ({
  note,
}) => {
  const { t } = useTranslation();
  return <TrashAlertPresentational t={t} note={note} />;
};
