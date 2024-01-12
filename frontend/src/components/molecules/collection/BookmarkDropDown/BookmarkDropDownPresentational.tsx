import React from "react";
import { TFunction } from "i18next";

import { DropDownMenu, Icon, Margin, NoteLink } from "@atoms/index";
import { INote } from "@redux/types/note";

import BookmarkIcon from "@public/BookmarkIcon.svg";

interface IBookmarkDropDownPresentationalProps {
  isLoading: boolean;
  notes: Array<INote> | undefined;
  t: TFunction;
}

export const BookmarkDropDownPresentational: React.FC<
  IBookmarkDropDownPresentationalProps
> = ({ isLoading, notes, t }) => {
  return (
    <DropDownMenu
      text={t("bookmark")}
      icon={<Icon icon={<BookmarkIcon />} />}
      isOpenDefaultValue={true}
    >
      <Margin ml={30}>
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
        {!isLoading && notes?.length == 0 && <div>{t("bookmarkEmpty")}</div>}
      </Margin>
    </DropDownMenu>
  );
};
