import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { AddCellMenuStyled, ToolStyled } from "./addCellstyled";
import { pushCell } from "@redux/features/noteSlice";
import { ICell } from "@redux/types/cell";
import { ContextMenuItem } from "@atoms/index";
import { MenuMode } from "@organisms/Cell/MenuMode";


interface IAddCellProps {
  cell: ICell;
  menuMode: MenuMode
  setMenuMode: Function
}

export const AddCell: React.FC<IAddCellProps> = ({ menuMode, setMenuMode }) => {
  const dispatch = useDispatch()

  const onClickHeandler = () => {
    setMenuMode((prev: MenuMode) => prev ==  MenuMode.CLOSE ? MenuMode.ADD_CELL : MenuMode.CLOSE);
  };

  const addCellHeandler = (cell: ICell) => {
    dispatch(pushCell({cell: cell, isMenu: true}))
  };

  return (
    <div>
      <div onClick={onClickHeandler}>+</div>
      {menuMode == MenuMode.ADD_CELL  && (
        <AddCellMenuStyled>
          <ContextMenuItem onClick={() => addCellHeandler({type: 'string', children: '_', property:{}, id: 2 })} >Text</ContextMenuItem>
          <ContextMenuItem onClick={() => addCellHeandler({type: 'heading', children: '_', property:{ variant: "big" }, id: 2 })}>Heading 1</ContextMenuItem>
          <ContextMenuItem onClick={() => addCellHeandler({type: 'heading', children: '_', property:{ variant: "medium" }, id: 2 })}>Heading 2</ContextMenuItem>
          <ContextMenuItem onClick={() => addCellHeandler({type: 'heading', children: '_', property:{ variant: "small" }, id: 2 })}>Heading 3</ContextMenuItem>
          <ContextMenuItem onClick={() => addCellHeandler({type: 'line', children: '_', property:{}, id: 2 })}>Line</ContextMenuItem>
          <ContextMenuItem onClick={() => addCellHeandler({type: 'list', children: '_', property:{}, id: 2 })}>List</ContextMenuItem>
          <ContextMenuItem onClick={() => addCellHeandler({type: 'checkbox', children: '_', property:{}, id: 2 })}>List</ContextMenuItem>
        </AddCellMenuStyled>
      )}
    </div>
  );
};
