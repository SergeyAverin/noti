import React, { useContext } from "react";
import { ThemeContext } from 'styled-components';

import { useGetBookmarkQuery } from "@redux/api/libraryApi";
import { ToggleMenu, Margin, NoteLink } from "@atoms/index";

import BookmarkIcon from "@public/BookmarkIcon.svg";

export const Bookmark: React.FC = () => {
  const theme = useContext(ThemeContext);
  const { data, isLoading, isError } = useGetBookmarkQuery();

  return (
    <ToggleMenu text="Bookmark" icon={<BookmarkIcon stroke={theme?.color.fg} />}>
      <Margin ml={30}>
        {!isLoading &&
          data &&
          data.map((note) => (
            <NoteLink key={note.slug} href={`/note/${note.slug}`}>
              {note.title}
            </NoteLink>
          ))}
        {!isLoading && data?.length == 0 && <div>Bookmark is empty</div>}
      </Margin>
    </ToggleMenu>
  );
};
