import React from "react";

import { CreateNotePresentational } from "./CreateNotePresentational";
import { useTranslation } from "react-i18next";
import { useCreateNote } from "./hooks/useCreateNote";

/** This component is button to create new note */
export const CreateNoteContainer: React.FC = () => {
  const { t } = useTranslation();
  const createNote = useCreateNote();

  return <CreateNotePresentational createNote={createNote} t={t} />;
};
