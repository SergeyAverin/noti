import React from "react";
import { useTranslation } from "react-i18next";

import { SelectLanguagePresentational } from "./SelectLanguagePresentational";
import { useSelectLanguage } from "./hooks/useSelectLanguage";

/** This component is select component to select language */
export const SelectLanguageContainer: React.FC = () => {
  const [selectedLanguage, onSelect] = useSelectLanguage();
  const { t } = useTranslation();

  return (
    <SelectLanguagePresentational
      selectedLanguage={selectedLanguage}
      onSelect={onSelect}
      t={t}
    />
  );
};
