import React from "react";
import { useTranslation } from "react-i18next";

import { SelectThemePresentational } from "./SelectThemePresentational";
import { useSelectTheme } from "./hooks/useSelectTheme";

/** This component is select component with selecting theme */
export const SelectThemeContainer: React.FC = () => {
  const [selectedTheme, selectTheme] = useSelectTheme();

  const { t } = useTranslation();

  return (
    <SelectThemePresentational
      t={t}
      selectTheme={selectTheme}
      selectedTheme={selectedTheme}
    />
  );
};
