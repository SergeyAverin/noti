import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Select } from "@atoms/Select/Select";
import { setTheme } from "@redux/features/themeSlice";
import { themeSelector } from "@redux/selectors/theme";
import { lightTheme } from "../../../styles/lightTheme";
import { darkTheme } from "../../../styles/darkTheme";
import { useTranslation } from "react-i18next";


export const SelectTheme: React.FC = () => {
  const dispatch = useDispatch()
  const theme = useSelector(themeSelector)
  const selectedTheme = theme == darkTheme ? 'dark' : 'light';
  const onSelect = (selected: string) => {
    const theme = selected=='dark'  ? darkTheme : lightTheme;
    dispatch(setTheme({theme, themeName: selected}))
  }
  const {t} = useTranslation()

  return (
    <>
      <h2>{t('selectTheme')}</h2>
      <Select selectItem={selectedTheme} onSelect={onSelect} items={['light', 'dark']} />
    </>
  )
}
