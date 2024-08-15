import { useTranslation } from "react-i18next";

/** This hook return selected language and function to select language */
export const useSelectLanguage = (): [string, (selected: string) => void] => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language;

  const onSelect = (selectedLanguage: string) => {
    i18n.changeLanguage(selectedLanguage);
  };

  return [selectedLanguage, onSelect];
};
