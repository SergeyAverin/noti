import React from "react";
import { TFunction } from "i18next";

import {
  SearchInputStyled,
  SearchInputWrapperStyled,
} from "./SearchInputStyled";
import { Icon } from "@atoms/index";

import SearchIcon from "@public/Search.svg";

interface ISearchInputPresentationalProps {
  searchString: string;
  search: Function;
  t: TFunction;
}

export const SearchInputPresentational: React.FC<
  ISearchInputPresentationalProps
> = ({ searchString, t, search }) => {
  return (
    <SearchInputWrapperStyled>
      <Icon icon={<SearchIcon />} />
      <SearchInputStyled
        placeholder={t("searchPlaceholder")}
        value={searchString}
        onChange={() => search()}
      />
    </SearchInputWrapperStyled>
  );
};
