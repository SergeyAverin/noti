import React, { useState } from "react";

import { Margin, NoteLink, Popup } from "@atoms/index";
import { SearchButton } from "@molecules/SearchButton";
import { SearchInput } from "@molecules/SearchInput/SearchInput";
import { SearchItem } from "@molecules/SearchItem";
import { SeporatorStyled } from "@molecules/SearchItem/SearchItemStyled";
import { ItemsStyled } from "./SearchPanelStyled";

export const SearchPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const clickHeandler = () => {
    setIsOpen((prev) => !prev);
  }
  return (
    <>
    <SearchButton clickHeandler={clickHeandler} />
    {isOpen && (
        <Popup closeFunction={clickHeandler}>
              <SearchInput />
              <ItemsStyled>
              <Margin mt={30}>
                <SearchItem />
              </Margin>
              <SeporatorStyled />
              <Margin mt={30}>
                <SearchItem />
              </Margin>
              <SeporatorStyled />
              <Margin mt={30}>
                <SearchItem />
              </Margin>
              <SeporatorStyled />
              <Margin mt={30}>
                <SearchItem />
              </Margin>
              <SeporatorStyled />
              <Margin mt={30}>
                <SearchItem />
              </Margin>
              <SeporatorStyled />
              <Margin mt={30}>
                <SearchItem />
              </Margin>
              </ItemsStyled>
        </Popup>
      )}
    </>
  );
};
