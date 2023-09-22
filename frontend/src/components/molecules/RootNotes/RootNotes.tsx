import React from "react";

import { Margin, NoteLink } from "@atoms/index";
import { useGetRootQuery } from "@redux/api/libraryApi";

export const RootNotes: React.FC = () => {
  const { data, isLoading, isError } = useGetRootQuery();

  return (
    <div>
      {!isLoading &&
        data &&
        data.slice().reverse().map((note) => (
            <NoteLink haveBackground={true} href={`/notes/${note.slug}`} key={note.slug}>
              {note.title}
            </NoteLink>
        ))}
    </div>
  );
};
