import React, { useState } from "react";

import { ItemsStyled } from "./SearchPanelStyled";
import { Margin, Popup } from "@atoms/index";
import { SearchButton } from "@molecules/SearchButton";
import { SearchInput } from "@molecules/SearchInput/SearchInput";
import { SearchItem } from "@molecules/SearchItem";
import { SeparatorStyled } from "@molecules/SearchItem/SearchItemStyled";
import { useSearchNoteMutation } from "@redux/api/searchApi";
import { ISearchNoteResponse, INoteFromSearch } from "@redux/api/searchApi";


export const SearchPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<Array<INoteFromSearch>>([]);
  const [searchString, setSearchString] = useState('');
  const [searchNote] = useSearchNoteMutation()
  const onSearch = (searchString: string) => {
  
    searchNote(searchString).unwrap().then((data) => {
      console.log(data.notes)
      setSearchResult([...data.notes])
    });
  }
  const clickHandler = () => {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
    <SearchButton clickHeandler={clickHandler} />
    {isOpen && (
        <Popup closeFunction={clickHandler}>
              <SearchInput onSearch={onSearch} searchString={searchString} setSearchString={setSearchString} />
              <ItemsStyled>

            {searchResult.map((searchItem) => (
              <>
                <Margin mt={30}>
                <SearchItem slug={searchItem.slug} content={searchItem.content} title={searchItem.title} searchString={searchString} />
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
