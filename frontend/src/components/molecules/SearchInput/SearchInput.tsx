import React from "react";

import { SerachInputWrapperStyled, SerachInputStyled } from "./SearchInputStyled";

import SearchIcon from '@public/Search.svg'


export const SearchInput: React.FC = () => {
    return (
        <SerachInputWrapperStyled>
            <SearchIcon />
            <SerachInputStyled placeholder="write search query" />
        </SerachInputWrapperStyled>
    )
}
