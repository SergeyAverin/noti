import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { EditCellPropertyMenuStyled, EditCellPropertyButtonStyled,  } from "./EditCellPropertyStyled";
import { ICell } from "@redux/types/cell";
import { editProperty, removeCell } from "@redux/features/noteSlice";
import { ContextMenuItemDropDown, ContextMenuItem } from "@atoms/index";
import { MenuMode } from "@organisms/Cell/MenuMode";

import EditIcoin from '@public/EditIcon.svg'
import { EditCellPropertyProppertyStyled } from "@organisms/Cell/CellStyled";

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
    <EditCellPropertyProppertyStyled>
      <EditCellPropertyButtonStyled onClick={onClickHeandler}>
        <EditIcoin />
      </EditCellPropertyButtonStyled>
      {menuMode == MenuMode.EDIT_PROPERTY && (
        <EditCellPropertyMenuStyled>
          <ContextMenuItem onClick={removeCellHeandler} >remove cell</ContextMenuItem>

          <ContextMenuItemDropDown text="FG Color">
            <ContextMenuItem onClick={() => editPropertyHeandler({color: 'red'})} >red</ContextMenuItem>
            <ContextMenuItem onClick={() => editPropertyHeandler({color: 'green'})} >green</ContextMenuItem>
            <ContextMenuItem onClick={() => editPropertyHeandler({color: 'blue'})} >blue</ContextMenuItem>
          </ContextMenuItemDropDown>

          <ContextMenuItemDropDown text="BG Color">
            <ContextMenuItem onClick={() => editPropertyHeandler({bgColor: 'red'})} >red</ContextMenuItem>
            <ContextMenuItem onClick={() => editPropertyHeandler({bgColor: 'green'})} >green</ContextMenuItem>
            <ContextMenuItem onClick={() => editPropertyHeandler({bgColor: 'blue'})} >blue</ContextMenuItem>
          </ContextMenuItemDropDown>

        </EditCellPropertyMenuStyled>
      )}
    </EditCellPropertyProppertyStyled>
  );
};
