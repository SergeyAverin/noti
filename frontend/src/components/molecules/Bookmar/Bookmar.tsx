import React from "react";

import { useGetBookmarkQuery } from "@redux/api/libraryApi";
import { ToggleMenu, Margin } from "@atoms/index";

import BookmarkIcon from "@public/BookmarkIcon.svg";

export const Bookmark: React.FC = () => {
  const { data, isLoading, isError } = useGetBookmarkQuery();
  return (
    <ToggleMenu text="Bookmark" icon={<BookmarkIcon />}>
      <Margin ml={30}>
        {!isLoading &&
          data &&
          data.map((note) => <li key={note.slug}>{note.title}</li>)}
      </Margin>
    </ToggleMenu>
  );
};
