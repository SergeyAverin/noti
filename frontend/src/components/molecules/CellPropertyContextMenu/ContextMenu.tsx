import React from "react";
import { useDispatch } from "react-redux";

import {
  ContextMenuStyled,
  MenuListStyled,
  MenuItemStyled,
  SubMenuListStyled,
} from "../../atoms/ContextMenu/ContextMenuStled";
import { addCell, removeCell, changeProperty } from "@redux/features/noteSlice";
import { ICell, CellStyleMode, CellPropertyColor } from "@redux/types/cell";


interface IContextMenuProps {
  cell: ICell
}

export const ContextMenu: React.FC<IContextMenuProps> = ({ cell }) => {
  const dispatch = useDispatch()
  const removeCellHeandler = () => {
    dispatch(removeCell({id: cell.id}))
  }
  const dublicateCellHeandler = () => {
    dispatch(addCell({ newCell: cell, oldCellId: cell.id }));
  }
  const changePropertyHeandler = (property: Object) => {
    dispatch(changeProperty({cellId: cell.id, property}))
  }
  return (
    <ContextMenuStyled>
      <MenuListStyled>
        <MenuItemStyled onClick={removeCellHeandler}>Delete cell</MenuItemStyled>
        <MenuItemStyled>Replace to</MenuItemStyled>
        <MenuItemStyled onClick={dublicateCellHeandler}>Dublicate</MenuItemStyled>
      </MenuListStyled>
      <MenuListStyled>
        <MenuItemStyled>
          Select bg color
          <SubMenuListStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.RED, styleMode: CellStyleMode.BACKGROUND})}>red</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.BLUE, styleMode: CellStyleMode.BACKGROUND})}>blue</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.GREEN, styleMode: CellStyleMode.BACKGROUND})}>green</MenuItemStyled>

            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.YELLOW, styleMode: CellStyleMode.BACKGROUND})}>yellow</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.PINK, styleMode: CellStyleMode.BACKGROUND})}>pink</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.ORANGE, styleMode: CellStyleMode.BACKGROUND})}>orange</MenuItemStyled>

            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.PURPLE, styleMode: CellStyleMode.BACKGROUND})}>purple</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.BROWN, styleMode: CellStyleMode.BACKGROUND})}>brown</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.GREY, styleMode: CellStyleMode.BACKGROUND})}>greu</MenuItemStyled>
          </SubMenuListStyled>
        </MenuItemStyled>
        <MenuItemStyled>
          Select fg color
          <SubMenuListStyled>
          <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.RED, styleMode: CellStyleMode.FONT_COLOR})}>red</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.BLUE, styleMode: CellStyleMode.FONT_COLOR})}>blue</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.GREEN, styleMode: CellStyleMode.FONT_COLOR})}>green</MenuItemStyled>

            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.YELLOW, styleMode: CellStyleMode.FONT_COLOR})}>yellow</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.PINK, styleMode: CellStyleMode.FONT_COLOR})}>pink</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.ORANGE, styleMode: CellStyleMode.FONT_COLOR})}>orange</MenuItemStyled>

            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.PURPLE, styleMode: CellStyleMode.FONT_COLOR})}>purple</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.BROWN, styleMode: CellStyleMode.FONT_COLOR})}>brown</MenuItemStyled>
            <MenuItemStyled onClick={() => changePropertyHeandler({color: CellPropertyColor.GREY, styleMode: CellStyleMode.FONT_COLOR})}>grey</MenuItemStyled>
          </SubMenuListStyled>
        </MenuItemStyled>
      </MenuListStyled>
    </ContextMenuStyled>
  );
};
