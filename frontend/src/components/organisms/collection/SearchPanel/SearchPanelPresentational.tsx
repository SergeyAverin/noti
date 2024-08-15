import React from "react";

import { ItemsStyled } from "./SearchPanelStyled";
import { Margin, Popup } from "@atoms/index";
import SearchButton from "@molecules/collection/SearchButton";
import SearchInput from "@molecules/collection/SearchInput";
import SearchItem from "@molecules/collection/SearchItem";
import { SeparatorStyled } from "@molecules/collection/SearchItem/SearchItemStyled";
import { INoteFromSearch } from "@redux/api/searchApi";

interface ISearchPanelPresentational {
  toggleIsOpened: Function;
  onSearch: Function;
  setSearchString: Function;
  isOpened: boolean;
  searchString: string;
  searchResult: Array<INoteFromSearch>;
}

export const SearchPanelPresentational: React.FC<
  ISearchPanelPresentational
> = ({
  toggleIsOpened,
  isOpened,
  onSearch,
  searchResult,
  searchString,
  setSearchString,
}) => {
  return (
    <>
      <SearchButton onClick={toggleIsOpened} />
      {isOpened && (
        <Popup onClose={toggleIsOpened}>
          <SearchInput
            onSearch={onSearch}
            searchString={searchString}
            setSearchString={setSearchString}
          />
          <ItemsStyled>
            {searchResult.map((searchItem) => (
              <>
                <Margin mt={30}>
                  <SearchItem
                    slug={searchItem.slug}
                    content={searchItem.content}
                    title={searchItem.title}
                    searchString={searchString}
                  />
                </Margin>
                <SeparatorStyled />
              </>
            ))}
          </ItemsStyled>
        </Popup>
      )}
    </>
  );
};
