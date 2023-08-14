import React from "react";

import { CellCheckboxStyled,  CellCheckboxWrapperStyled } from "./CellStyled";

interface ICellCheckboxProps {
  text: string;
}

export const CellCheckbox: React.FC<ICellCheckboxProps> = ({ text }) => {
  return <CellCheckboxWrapperStyled>
        <CellCheckboxStyled checked={true} name='a' />
        { text }
    </CellCheckboxWrapperStyled>;
};
