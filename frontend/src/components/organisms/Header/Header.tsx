import React, { useEffect } from "react";

import { HeaderStyled } from './HeaderStyled'

import { AddTrash } from "@molecules/AddTrash";
import { AddBookmark } from "@molecules/AddBookmark";
import { Flex } from "@atoms/index";
import { INote } from "@redux/types/note";
import { DataCreated } from "@molecules/DataCreated/DataCreated";


interface IHeaderProps {
    note: INote
}

export const Header: React.FC<IHeaderProps> = ({ note }) => {
    useEffect(() => {
        console.log('note')
        console.log(note)
    })
    return (
        <HeaderStyled>
            <div></div>
            <Flex justifyContent="flex-start" alignItems="center">
                <DataCreated dataCreated={new Date(note.metadata.dataCreated)} dataEdited={new Date(note.metadata.dataUpdate)}  />
                <AddTrash note={note} />
                <AddBookmark note={note}  />
            </Flex>
        </HeaderStyled>
    )
}
