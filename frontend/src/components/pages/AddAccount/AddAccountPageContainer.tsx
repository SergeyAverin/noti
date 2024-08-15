import React from "react";
import { useTranslation } from "react-i18next";

import { AddAccountPagePresentational } from "./AddAccountPagePresentational";

export const AddAccountPageContainer: React.FC = () => {
  const { t } = useTranslation();
  return <AddAccountPagePresentational t={t} />;
};
