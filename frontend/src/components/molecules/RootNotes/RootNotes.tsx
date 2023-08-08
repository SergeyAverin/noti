import React from "react";

import { NoteLink } from "@atoms/index";
import { useGetRootQuery } from "@redux/api/libraryApi";

export const RootNotes: React.FC = () => {
  const { data, isLoading, isError } = useGetRootQuery();

  return (
    <div>
      {!isLoading &&
        data &&
        data.map((note) => (
          <NoteLink href={`/notes/${note.slug}`} key={note.slug}>
            {note.title}
          </NoteLink>
        ))}
    </div>
  );
};
