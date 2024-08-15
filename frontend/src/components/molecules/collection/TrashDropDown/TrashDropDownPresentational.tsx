import React from "react";
import { TFunction } from "i18next";
import { Link } from "react-router-dom";

import {
  DropDownMenu,
  Icon,
  Margin,
  NoteLink,
  SideBarTool,
} from "@atoms/index";
import { INote } from "@redux/types/note";

import TrashIcon from "@public/TrashIcon.svg";
import TableIcon from "@public/TableIcon.svg";

interface ITrashDropDownPresentationalProps {
  isLoading: boolean;
  notes: Array<INote> | undefined;
  t: TFunction;
}

export const TrashDropDownPresentational: React.FC<
  ITrashDropDownPresentationalProps
> = ({ isLoading, notes, t }) => {
  return (
    <DropDownMenu
      text={t("trash")}
      icon={<Icon icon={<TrashIcon />} />}
    >
      <Margin ml={15} mb={5}>
        <Link to="/notes/trash">
          <SideBarTool
            icon={<Icon icon={<TableIcon />} />}
            onClick={() => {}}
            text={t("trashTable")}
          />
        </Link>
      </Margin>
      <Margin ml={18}>
        {!isLoading &&
          notes &&
          notes.map((note) => (
            <NoteLink
              haveBackground={true}
              key={note.slug}
              href={`/notes/${note.slug}`}
            >
              {note.title}
            </NoteLink>
          ))}
        {!isLoading && notes?.length == 0 && <div>{t("trashEmpty")}</div>}
      </Margin>
    </DropDownMenu>
  );
};
