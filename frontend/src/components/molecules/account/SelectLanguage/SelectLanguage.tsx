import React from "react"
import { useTranslation } from "react-i18next";

import { Select } from "@atoms/ui/Select/Select";

export const SelectLanguage: React.FC = () => {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language;
  const onSelect = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage)
  }
  const {t} = useTranslation()

  return (
    <>
      <h2>{t('selectLanguage')}</h2>
      <Select selectItem={currentLanguage} onSelect={onSelect} items={['en', 'ru']} />
    </>
  )
}
