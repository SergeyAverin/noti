import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "@atoms/ui/Select/Select";
import { setTheme } from "@redux/features/themeSlice";
import { themeSelector } from "@redux/selectors/theme";
import { useTranslation } from "react-i18next";
import { themeDict } from "../../../../styles/themeDict";

export const SelectTheme: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);

  const selectedTheme = Object.keys(themeDict).find(key => themeDict[key] === theme) as string;

  const onSelect = (selected: string) => {
    const theme = themeDict[selected];
    dispatch(setTheme({ theme, themeName: selected }));
  };
  const { t } = useTranslation();

  return (
    <>
      <h2>{t("selectTheme")}</h2>
      <Select
        selectItem={selectedTheme}
        onSelect={onSelect}
        items={["light", "dark", "coffee"]}
      />
    </>
  );
};
