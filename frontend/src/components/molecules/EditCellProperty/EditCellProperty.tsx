import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { MenuMode } from "@organisms/Cell/MenuMode";
import { ICell } from "@redux/types/cell";
import { EditCellPropertyMenuStyled, ToolStyled, EditCellPropertyStyled } from "./EditCellPropertyStyled";
import { editProperty, removeCell } from "@redux/features/noteSlice";


interface IEditCellPropertyProps {
  cell: ICell;
  menuMode: MenuMode
  setMenuMode: Function
}

export const EditCellProperty: React.FC<IEditCellPropertyProps> = ({ menuMode, setMenuMode, cell }) => {
  const dispatch = useDispatch()

  const onClickHeandler = () => {
    setMenuMode((prev: MenuMode) => prev ==  MenuMode.CLOSE ? MenuMode.EDIT_PROPERTY : MenuMode.CLOSE);
  };
  
  const editPropertyHeandler = (property: object) => {
    dispatch(editProperty({property: {...cell.property, ...property}, id: cell.id}))
  };
  const removeCellHeandler = (property: object) => {
    dispatch(removeCell({id: cell.id}))
  };

  return (
    <div>
      <div onClick={onClickHeandler}>+</div>
      {menuMode == MenuMode.EDIT_PROPERTY && (
        <EditCellPropertyMenuStyled>
          <ToolStyled onClick={removeCellHeandler} >remove cell</ToolStyled>

          <div>FG Color</div>
          <ToolStyled onClick={() => editPropertyHeandler({color: 'red'})} >red</ToolStyled>
          <ToolStyled onClick={() => editPropertyHeandler({color: 'green'})} >green</ToolStyled>
          <ToolStyled onClick={() => editPropertyHeandler({color: 'blue'})} >blue</ToolStyled>
          <div>BG Color</div>
          <ToolStyled onClick={() => editPropertyHeandler({bgColor: 'red'})} >red</ToolStyled>
          <ToolStyled onClick={() => editPropertyHeandler({bgColor: 'green'})} >green</ToolStyled>
          <ToolStyled onClick={() => editPropertyHeandler({bgColor: 'blue'})} >blue</ToolStyled>
        </EditCellPropertyMenuStyled>
      )}
    </div>
  );
};
