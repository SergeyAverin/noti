import React from "react";

import { Margin, NoteLink } from "@atoms/index";
import { useGetRootQuery } from "@redux/api/libraryApi";

export const RootNotes: React.FC = () => {
  const { data, isLoading, isError } = useGetRootQuery();

  return (
    <div>
      {!isLoading &&
        data &&
        data.map((note) => (
          <Margin mb={15}>
            <NoteLink href={`/notes/${note.slug}`} key={note.slug}>
              {note.title}
            </NoteLink>
          </Margin>
        ))}
    </div>
  );
};
