import React from "react";

import { TitlePresentational } from "./TitlePresentational";
import { useChangeNoteTitle } from "./hooks/useChangeNoteTitle";
import { useLoadTitle } from "./hooks/useLoadTitle";
import { useControlInput } from "@hooks/useControlState";


export interface ITitleContainerProps {
  title: string;
  slug: string;
}

export const TitleContainer: React.FC<ITitleContainerProps> = ({ title, slug }) => {
  const [titleState, setTitleState, onChange] = useControlInput(title)

  useLoadTitle(title, setTitleState)

  const onBlur = useChangeNoteTitle(slug); 

  return (<TitlePresentational onBlur={onBlur} onChange={onChange} title={titleState} />);
};
