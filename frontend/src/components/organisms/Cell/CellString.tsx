import styled from "styled-components";

import { ICell } from "@redux/types/cell";
import React from "react";

interface ICellString {
  cell: ICell;
}

const CellStringStyled = styled.p`
  font-size: 24px;
  outline: none;
`;

export const CellString: React.FC<ICellString> = ({ cell }) => {
  return (
    <CellStringStyled contentEditable={true}>{cell.children}</CellStringStyled>
  );
};
