import React from "react";

import { SearchInputPresentational } from "./SearchInputPresentational";
import { useTranslation } from "react-i18next";
import { useSearchInput } from "./hooks/useSearchInput";

interface ISearchInputContainerProps {
  onSearch: Function;
  searchString: string;
  setSearchString: Function;
}

/** This component is input with search string. On change this input called search function. */
export const SearchInputContainer: React.FC<ISearchInputContainerProps> = ({
  setSearchString,
  onSearch,
  searchString,
}) => {
  const { t } = useTranslation();
  const search = useSearchInput(searchString, setSearchString, onSearch);
  return (
    <SearchInputPresentational
      search={search}
      t={t}
      searchString={searchString}
    />
  );
};
