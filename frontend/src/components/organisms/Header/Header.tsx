import React from "react";

import { HeaderStyled } from './HeaderStyled'

import { AddTrash } from "@molecules/AddTrash";
import { AddBookmark } from "@molecules/AddBookmark";
import { Flex } from "@atoms/index";
import { INote } from "@redux/types/note";


interface IHeaderProps {
    note: INote
}

export const Header: React.FC<IHeaderProps> = ({ note }) => {
    return (
        <HeaderStyled>
            <div></div>
            <Flex justifyContent="flex-start" alignItems="flex-start">
                <AddTrash note={note} />
                <AddBookmark note={note}  />
            </Flex>
        </HeaderStyled>
    )
}
