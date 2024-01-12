import { useTranslation } from "react-i18next";

import { useCreateNoteMutation } from "@redux/api/noteApi";

/** This hook return function to create note */
export const useCreateNote = () => {
  const [createMutation] = useCreateNoteMutation();
  const { t } = useTranslation();

  const createNoteFunc = () => {
    createMutation({ title: t("newNote") });
  };

  return createNoteFunc;
};
