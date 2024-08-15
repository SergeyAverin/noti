import React from "react";
import { TFunction } from "i18next";

import { Select } from "@atoms/ui/Select/Select";

interface ISelectLanguagePresentationalProps {
  selectedLanguage: string;
  onSelect: (selected: string) => void;
  t: TFunction;
}

export const SelectLanguagePresentational: React.FC<
  ISelectLanguagePresentationalProps
> = ({ selectedLanguage, onSelect, t }) => {
  return (
    <>
      <h2>{t("selectLanguage")}</h2>
      <Select
        selectItem={selectedLanguage}
        onSelect={onSelect}
        items={["en", "ru"]}
      />
    </>
  );
};
