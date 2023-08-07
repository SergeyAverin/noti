import React from "react";

import { ToggleMenu, Margin } from "@atoms/index";
import { useGetRootQuery } from "@redux/api/libraryApi";

export const RootNotes: React.FC = () => {
  const { data, isLoading, isError } = useGetRootQuery();

  return (
      <div>
        {!isLoading &&
          data &&
          data.map((note) => <li key={note.slug}>{note.title}</li>)}
      </div>
  );
};
