import React from "react";

import { TrashMessageStyled } from "./TrashMessageStyled";
import { Flex, Margin, Button } from "@atoms/index";
import { useRemoveNoteMutation, useRemoveTrashMutation } from "@redux/api/libraryApi";
import { INote } from "@redux/types/note";


interface ITrashMessageProps {
    note: INote
}

export const TrashMessage: React.FC<ITrashMessageProps> = ({ note }) => {
    const [removeNote] = useRemoveNoteMutation()
    const [removeNoteFromTrash] = useRemoveTrashMutation()

    return <TrashMessageStyled>
        <Flex justifyContent="space-between" alignItems="center">
            <div>
                Note in trash
            </div>
            <Flex justifyContent="flex-start" alignItems="center">
                <Button onClick={() => removeNoteFromTrash(note.slug)}>Remove from trash</Button>
                <Margin ml={30}>
                    <Button onClick={() => removeNote(note.slug)}>Remove note</Button>
                </Margin>
            </Flex>
        </Flex>
    </TrashMessageStyled>
}
