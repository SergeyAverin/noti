import React from "react";

import { CellStyled, CellToolsStyled } from "./CellStyled";
import { ICell } from "@redux/types/cell";
import { CellString } from "./CellString";
import { CellCheckbox } from "./CellCheckbox";

interface ICellComponentProps {
  cell: ICell;
}

export const Cell: React.FC<ICellComponentProps> = ({ cell }) => {
  return (
    <CellStyled>
      <CellToolsStyled>
        <div>+</div>
        <div>-</div>
      </CellToolsStyled>
      <div>
        { cell.type == 'string' &&
            <CellString cell={cell} />
        }
        { cell.type == 'chekbox' &&
            <CellCheckbox text={'sd'} />
        }
      </div>
    </CellStyled>
  );
};
