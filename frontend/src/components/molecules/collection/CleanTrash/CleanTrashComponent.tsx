import React from "react";
import { useTranslation } from "react-i18next";

import { CleanTrashPresentational } from "./CleanTrashPresentational";
import { useCleanTrash } from "./hooks/useCleanTrash";

export const CleanTrashContainer: React.FC = () => {
  const cleanTrash = useCleanTrash();
  const { t } = useTranslation();

  return <CleanTrashPresentational cleanTrash={cleanTrash} t={t} />;
};
