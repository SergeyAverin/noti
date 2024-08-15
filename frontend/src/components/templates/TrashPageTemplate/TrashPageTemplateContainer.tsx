import React from "react";

import { TrashPageTemplatePresentational } from "./TrashPageTemplatePresentational";
import { INote } from "@redux/types/note";

interface ITrashPageTemplateContainerProps {
  notes: INote[];
}

/** This component is template of trash page in which page components are inserted  */
export const TrashPageTemplateContainer: React.FC<ITrashPageTemplateContainerProps> = ({ notes }) => {
  return (
      <TrashPageTemplatePresentational  notes={notes} />
  )
}
