import React from "react";
import { useTranslation } from "react-i18next";

import { RestoreNotePresentational } from "./RestoreNotePresentational";
import { useRestoreNote } from "./hooks/useRestoreNote";

interface IRestoreNoteContainerProps {
  slug: string;
}

/** This button restore note on click */
export const RestoreNoteContainer: React.FC<IRestoreNoteContainerProps> = ({
  slug,
}) => {
  const { t } = useTranslation();
  const restoreNote = useRestoreNote(slug);

  return <RestoreNotePresentational restoreNote={restoreNote} t={t} />;
};
