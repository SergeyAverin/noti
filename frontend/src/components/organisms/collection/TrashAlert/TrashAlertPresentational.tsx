import React from "react";
import { TFunction } from "i18next";

import { TrashAlertStyled } from "./TrashAlertStyled";
import { Flex, Margin } from "@atoms/index";
import RestoreNote from "@molecules/collection/RestoreNote";
import RemoveNote from "@molecules/collection/RemoveNote";
import { INote } from "@redux/types/note";

interface ITrashAlertPresentationalProps {
  note: INote;
  t: TFunction;
}

export const TrashAlertPresentational: React.FC<
  ITrashAlertPresentationalProps
> = ({ note, t }) => {
  return (
    <TrashAlertStyled>
      <Flex justifyContent="space-between" alignItems="center">
        <div>{t("trashAlert")}</div>
        <Flex justifyContent="flex-start" alignItems="center">
          <RestoreNote slug={note.slug} />
          <Margin ml={30}>
            <RemoveNote slug={note.slug} />
          </Margin>
        </Flex>
      </Flex>
    </TrashAlertStyled>
  );
};
