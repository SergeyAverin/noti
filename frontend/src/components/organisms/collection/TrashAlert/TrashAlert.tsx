import React from "react";

import { TrashAlertStyled } from "./TrashAlertStyled";
import { INote } from "@redux/types/note";
import { Flex, Margin, Button } from "@atoms/index";
import { RestoreNote } from "@molecules/collection/RestoreNote";
import { RemoveNote } from "@molecules/collection/RemoveNote";
import { t } from "i18next";
import { useTranslation } from "react-i18next";


interface ITrashAlertProps {
    note: INote
}

export const TrashAlert: React.FC<ITrashAlertProps> = ({ note }) => {
    const { t } = useTranslation();
    return <TrashAlertStyled>
        <Flex justifyContent="space-between" alignItems="center">
            <div>
                {t('trashAlert')}
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
