import React, { useState } from "react";

import { SerachInputWrapperStyled, SerachInputStyled } from "./SearchInputStyled";

import SearchIcon from '@public/Search.svg'
import { Icon } from "@atoms/index";


interface ISearchInputProps {
    onSearch: Function,
    searchString: string,
    setSearchString: Function
}
export const SearchInput: React.FC<ISearchInputProps> = ({onSearch, searchString, setSearchString}) => {
    const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value)
        onSearch(searchString)
    }
    return (
        <SerachInputWrapperStyled>
            <Icon icon={<SearchIcon />} />
            <SerachInputStyled placeholder="write search query" value={searchString} onChange={onChange} />
        </SerachInputWrapperStyled>
    )
}
