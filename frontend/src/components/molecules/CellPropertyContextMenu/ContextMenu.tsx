import React from "react";
import { useDispatch } from "react-redux";

import {
  ContextMenuStyled,
  MenuListStyled,
  MenuItemStyled,
  SubMenuListStyled,
} from "../../atoms/ContextMenu/ContextMenuStled";
import { removeCell } from "@redux/features/noteSlice";
import { ICell } from "@redux/types/cell";


interface IContextMenuProps {
  cell: ICell
}

export const ContextMenu: React.FC<IContextMenuProps> = ({ cell }) => {
  const dispatch = useDispatch()
  const removeCellHeandler = () => {
    dispatch(removeCell({id: cell.id}))
  }
  return (
    <ContextMenuStyled>
      <MenuListStyled>
        <MenuItemStyled onClick={removeCellHeandler}>Delete cell</MenuItemStyled>
        <MenuItemStyled>Replace to</MenuItemStyled>
        <MenuItemStyled>Dublicate</MenuItemStyled>
      </MenuListStyled>
      <MenuListStyled>
        <MenuItemStyled>
          Select bg color
          <SubMenuListStyled>
            <MenuItemStyled>red</MenuItemStyled>
            <MenuItemStyled>blue</MenuItemStyled>
          </SubMenuListStyled>
        </MenuItemStyled>
        <MenuItemStyled>
          Select fg color
          <SubMenuListStyled>
            <MenuItemStyled>red</MenuItemStyled>
            <MenuItemStyled>blue</MenuItemStyled>
          </SubMenuListStyled>
        </MenuItemStyled>
      </MenuListStyled>
    </ContextMenuStyled>
  );
};
