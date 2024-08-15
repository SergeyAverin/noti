import React from "react";

import { TitlePresentational } from "./TitlePresentational";
import { useChangeNoteTitle } from "./hooks/useChangeNoteTitle";
import { useLoadTitle } from "./hooks/useLoadTitle";
import { useControlInput } from "@hooks/useControlState";


export interface ITitleContainerProps {
  /** Note's title  */
  title: string;

  /** Note's slug */
  slug: string;
}

/** This component is note's title in note page. */
export const TitleContainer: React.FC<ITitleContainerProps> = ({ title, slug }) => {
  const [titleState, setTitleState, onChange] = useControlInput(title)

  useLoadTitle(title, setTitleState)

  const onBlur = useChangeNoteTitle(slug); 

  return (<TitlePresentational onBlur={onBlur} onChange={onChange} title={titleState} />);
};
