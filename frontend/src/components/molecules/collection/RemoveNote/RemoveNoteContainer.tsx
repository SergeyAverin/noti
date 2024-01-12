import React from "react";
import { useTranslation } from "react-i18next";

import { RemoveNotePresentational } from "./RemoveNotePresentational";
import { useRemoveNote } from "./hooks/useRemoveNote";

interface IRemoveNoteContainer {
  slug: string;
}

/** This button remove note on click */
export const RemoveNoteContainer: React.FC<IRemoveNoteContainer> = ({
  slug,
}) => {
  const removeNote = useRemoveNote(slug);
  const { t } = useTranslation();

  return <RemoveNotePresentational removeNote={removeNote} t={t} />;
};
