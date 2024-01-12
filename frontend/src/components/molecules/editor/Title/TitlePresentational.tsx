import React from "react";

import { TitleInputStyled, TitleLineStyled, TitleStyled } from "./TitleStyled";

interface ITitlePresentationalProps {
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
}

export const TitlePresentational: React.FC<ITitlePresentationalProps> = ({ title, onChange, onBlur }) => {
  return (
    <TitleStyled>
      <TitleInputStyled
        value={title}
        onChange={onChange}
        onBlur={onBlur}
      />
      <TitleLineStyled />
    </TitleStyled>
  )
}
