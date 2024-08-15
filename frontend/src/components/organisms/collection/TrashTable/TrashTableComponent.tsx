import React from "react";

import { TrashTablePresentational } from "./TrashTablePresentational";
import { INote } from "@redux/types/note";

interface IHeaderContainerProps {
  notes: Array<INote>;
}

/** This component is trash table in trash page */
export const TrashTableContainer: React.FC<IHeaderContainerProps> = ({
  notes,
}) => {
  return <TrashTablePresentational notes={notes} />;
};
