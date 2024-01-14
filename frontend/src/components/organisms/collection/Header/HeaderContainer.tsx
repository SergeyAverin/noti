import React from "react";

import { HeaderPresentational } from "./HeaderPresentational";
import { INote } from "@redux/types/note";

interface IHeaderContainerProps {
  note: INote;
}

/** This component header from note page */
export const HeaderContainer: React.FC<IHeaderContainerProps> = ({ note }) => {
  return <HeaderPresentational note={note} />;
};
