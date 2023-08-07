import React from "react";

import { useGetBookmarkQuery } from "@redux/api/libraryApi";
import { ToggleMenu, Margin, Note } from "@atoms/index";

import BookmarkIcon from "@public/BookmarkIcon.svg";

export const Bookmark: React.FC = () => {
  const { data, isLoading, isError } = useGetBookmarkQuery();
  return (
    <ToggleMenu text="Bookmark" icon={<BookmarkIcon />}>
      <Margin ml={30}>
        {!isLoading &&
          data &&
          data.map((note) => (
            <Note key={note.slug} href={`/note/${note.slug}`}>
              {note.title}
            </Note>
          ))}
      </Margin>
    </ToggleMenu>
  );
};
