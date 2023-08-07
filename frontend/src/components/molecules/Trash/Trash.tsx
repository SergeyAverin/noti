import React from "react";

import { ToggleMenu, Margin, Note } from "@atoms/index";
import { useGetTrashQuery } from "@redux/api/libraryApi";

import TrashIcon from "@public/TrashIcon.svg";

export const Trash: React.FC = () => {
  const { data, isLoading, isError } = useGetTrashQuery();

  return (
    <ToggleMenu text="Trash" icon={<TrashIcon />}>
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
