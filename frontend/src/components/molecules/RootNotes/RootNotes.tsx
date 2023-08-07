import React from "react";

import { Note } from "@atoms/index";
import { useGetRootQuery } from "@redux/api/libraryApi";

export const RootNotes: React.FC = () => {
  const { data, isLoading, isError } = useGetRootQuery();

  return (
      <div>
        {!isLoading &&
          data &&
          data.map((note) => <Note href={`/notes/${note.slug}`} key={note.slug}>{note.title}</Note>)}
      </div>
  );
};
