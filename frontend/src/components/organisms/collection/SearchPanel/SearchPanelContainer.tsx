import React from "react";

import { SearchPanelPresentational } from "./SearchPanelPresentational";
import { useSearch } from "./hooks/useSearch";
import { useControlInput } from "@hooks/useControlState";
import { usePopup } from "@hooks/usePopup";

/** This component is panel with search input and result of search */
export const SearchPanelContainer: React.FC = () => {
  const [searchString, setSearchString] = useControlInput("");
  const [onSearch, searchResult] = useSearch();
  const [isOpened, toggleIsOpened] = usePopup();

  return (
    <SearchPanelPresentational
      isOpened={isOpened}
      onSearch={onSearch}
      searchResult={searchResult}
      searchString={searchString}
      setSearchString={setSearchString}
      toggleIsOpened={toggleIsOpened}
    />
  );
};
