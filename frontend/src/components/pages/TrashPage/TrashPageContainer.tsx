import React from "react";

import { useNotesFromTrash } from "./hooks/useNotesFromTrash";
import { TrashPagePresentational } from "./TrashPagePresentational";

/** This component is page with trash table */
export const TrashPageContainer: React.FC = () => {
  const [isLoading, notes] = useNotesFromTrash();
  return <TrashPagePresentational notes={notes} isLoading={isLoading} />;
};
