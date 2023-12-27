import React, { useEffect } from "react";

import { HeaderStyled } from './HeaderStyled'

import { AddTrash } from "@molecules/AddTrash";
import { AddBookmark } from "@molecules/AddBookmark";
import { Flex, Margin } from "@atoms/index";
import { INote } from "@redux/types/note";
import { DateCreated } from "@molecules/DateCreated/DateCreated";
import { ShareButton } from "@molecules/ShareButton"; 


interface IHeaderProps {
    note: INote
}

export const Header: React.FC<IHeaderProps> = ({ note }) => {
    return (
        <HeaderStyled>
            <div></div>
            <Flex justifyContent="flex-start" alignItems="center">
                <Margin mr={30}>
                  <DateCreated dataCreated={new Date(note.metadata.dataCreated)} dataEdited={new Date(note.metadata.dataUpdate)}  />
                </Margin>
                <ShareButton />
                <AddTrash note={note} />
                <AddBookmark note={note}  />
            </Flex>
        </HeaderStyled>
    )
}
