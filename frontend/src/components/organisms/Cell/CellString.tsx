import React from "react";
import styled from "styled-components";

import { ICell } from "@redux/types/cell";


interface ICellString {
  cell: ICell;
}

const CellStringStyled = styled.div`
  font-size: ${(props) => props.theme.fontSizes.small};
  outline: none;
  &::placeholder {
      color: red;
    }
`;

export const CellString: React.FC<ICellString> = ({ cell }) => {
  return (
      <CellStringStyled
        contentEditable={true}
        suppressContentEditableWarning={true}
        placeholder='placeholder'
      >
        { cell.children }
      </CellStringStyled>
  );
};
