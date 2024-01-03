import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import { useGetBookmarkQuery } from "@redux/api/libraryApi";
import { DropDownMenu, Icon, Margin, NoteLink } from "@atoms/index";

import BookmarkIcon from "@public/BookmarkIcon.svg";
import { useTranslation } from "react-i18next";

export const BookmarkDropDown: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { data, isLoading, isError } = useGetBookmarkQuery();
  const { t } = useTranslation()

  return (
    <DropDownMenu
      text={t('bookmark')}
      icon={<Icon icon={<BookmarkIcon />} />}
      isOpenDefaultValue={true}
    >
      <Margin ml={30}>
        {!isLoading &&
          data &&
          data.map((note) => (
            <NoteLink
              haveBackground={true}
              key={note.slug}
              href={`/notes/${note.slug}`}
            >
              {note.title}
            </NoteLink>
          ))}
        {!isLoading && data?.length == 0 && <div>{t('bookmarkEmpty')}</div>}
      </Margin>
    </DropDownMenu>
  );
};
