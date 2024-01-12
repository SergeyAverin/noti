import React from "react";

import { RootNotesPresentational } from "./RootNotesPresentational";
import { useGetRootQuery } from "@redux/api/libraryApi";

/** This component show notes from root directory */
export const RootNotesContainer: React.FC = () => {
  const { data, isLoading } = useGetRootQuery();

  return <RootNotesPresentational isLoading={isLoading} notes={data} />;
};
