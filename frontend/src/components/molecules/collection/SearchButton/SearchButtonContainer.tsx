import React from "react";
import { useTranslation } from "react-i18next";

import { SearchButtonPresentational } from "./SearchButtonPresentational";

interface ISearchButtonContainerProps {
  onClick: Function;
}

/** This button called function to open search panel on click */
export const SearchButtonContainer: React.FC<ISearchButtonContainerProps> = ({
  onClick,
}) => {
  const { t } = useTranslation();

  return <SearchButtonPresentational onClick={onClick} t={t} />;
};
