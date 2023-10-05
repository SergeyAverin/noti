import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  ContextMenuStyled,
  MenuListStyled
} from "../../atoms/ContextMenu/ContextMenuStled";
import { addCell } from "@redux/features/noteSlice";
import { ICell, CellTypeEnum } from "@redux/types/cell";
import { MenuItem } from "@atoms/ContextMenu";


interface IContextMenuProps {
  cell: ICell
}

export const ContextMenu: React.FC<IContextMenuProps> = ({ cell }) => {
  const dispatch = useDispatch();
  const addCellHandler = (cellType: string) => {
    const newCell: ICell = {
      children: "_",
      property: {},
      type: cellType,
      id: uuidv4(),
    };
    dispatch(addCell({ newCell, oldCellId: cell.id }));
  };
  return (
    <ContextMenuStyled>
      <MenuListStyled>
        <MenuItem onClickHeandler={() => addCellHandler(CellTypeEnum.STRING)}>
          String
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler(CellTypeEnum.HEADING_LARGE)}>
          H1
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler(CellTypeEnum.HEADING_MEDIUM)}>
          H2
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler(CellTypeEnum.HEADING_SMALL)}>
          H3
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler(CellTypeEnum.CHECKBOX)}>
          Checkbox
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler(CellTypeEnum.LINE)}>
          Line
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler(CellTypeEnum.QUOTE)}>
          Quote
        </MenuItem>
      </MenuListStyled>
    </ContextMenuStyled>
  );
};
/*
        <MenuItem onClickHeandler={() => addCellHandler("string")}>
          Toggle list
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler("string")}>
          Page
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler("string")}>
          Image
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler("string")}>
          Table
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler("string")}>
          Number list
        </MenuItem>
        <MenuItem onClickHeandler={() => addCellHandler("string")}>
          Mark list
        </MenuItem>
*/