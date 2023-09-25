import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  ContextMenuStyled,
  MenuListStyled,
  MenuItemStyled,
} from "../../atoms/ContextMenu/ContextMenuStled";
import { addCell } from "@redux/features/noteSlice";
import { ICell, CellTypeEnum } from "@redux/types/cell";


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
        <MenuItemStyled onClick={() => addCellHandler(CellTypeEnum.STRING)}>
          String
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler(CellTypeEnum.HEADING_1)}>
          H1
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler(CellTypeEnum.HEADING_2)}>
          H2
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler(CellTypeEnum.HEADING_3)}>
          H3
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler(CellTypeEnum.CHECKBOX)}>
          Checkbox
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler(CellTypeEnum.LINE)}>
          Line
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler(CellTypeEnum.QUOTE)}>
          Quote
        </MenuItemStyled>
      </MenuListStyled>
    </ContextMenuStyled>
  );
};
/*
        <MenuItemStyled onClick={() => addCellHandler("string")}>
          Toggle list
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler("string")}>
          Page
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler("string")}>
          Image
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler("string")}>
          Table
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler("string")}>
          Number list
        </MenuItemStyled>
        <MenuItemStyled onClick={() => addCellHandler("string")}>
          Mark list
        </MenuItemStyled>
*/