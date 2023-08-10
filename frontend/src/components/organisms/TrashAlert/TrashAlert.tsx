import React from "react";

import { TrashAlertStyled } from "./TrashAlertStyled";
import { INote } from "@redux/types/note";
import { Flex, Margin, Button } from "@atoms/index";
import { RestoreNote } from "@molecules/RestoreNote";
import { RemoveNote } from "@molecules/RemoveNote";


interface ITrashAlertProps {
    note: INote
}

export const TrashAlert: React.FC<ITrashAlertProps> = ({ note }) => {
    return <TrashAlertStyled>
        <Flex justifyContent="space-between" alignItems="center">
            <div>
                Note in trash
            </div>
            <Flex justifyContent="flex-start" alignItems="center">
                <RestoreNote slug={note.slug} />
                <Margin ml={30}>
                    <RemoveNote slug={note.slug} />
                </Margin>
            </Flex>
        </Flex>
    </TrashAlertStyled>
}
