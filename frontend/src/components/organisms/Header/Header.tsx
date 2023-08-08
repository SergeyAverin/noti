import React from "react";

import { HeaderStyled } from './HeaderStyled'

import { AddTrash } from "@molecules/AddTrash";
import { AddBookmark } from "@molecules/AddBookmark";
import { Flex } from "@atoms/index";

export const Header: React.FC = () => {

    return (
        <HeaderStyled>
            <div></div>
            <Flex justifyContent="flex-start" alignItems="flex-start">
                <AddTrash />
                <AddBookmark />
            </Flex>
        </HeaderStyled>
    )
}
