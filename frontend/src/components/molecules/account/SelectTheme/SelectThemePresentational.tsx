import React from "react";
import { TFunction } from "i18next";

import { Select } from "@atoms/ui/Select/Select";

interface ISelectThemePresentationalProps {
  t: TFunction;
  selectedTheme: string;
  selectTheme: (themName: string) => void;
}

export const SelectThemePresentational: React.FC<
  ISelectThemePresentationalProps
> = ({ t, selectTheme, selectedTheme }) => {
  return (
    <>
      <h2>{t("selectTheme")}</h2>
      <Select
        selectItem={selectedTheme}
        onSelect={selectTheme}
        items={["light", "dark", "coffee"]}
      />
    </>
  );
};
