import React from "react";

import { INote } from "@redux/types/note";
import TrashPageTemplate from "@templates/TrashPageTemplate";

interface ITrashPagePresentationalPresentationalProps {
  isLoading: boolean;

  notes: INote[] | undefined;
}

export const TrashPagePresentational: React.FC<
  ITrashPagePresentationalPresentationalProps
> = ({ isLoading, notes }) => {
  return <>{!isLoading && notes && <TrashPageTemplate notes={notes} />}</>;
};
