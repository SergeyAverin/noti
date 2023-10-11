import React from "react";
import { useDispatch } from "react-redux";

import {
  ContextMenuStyled,
  MenuListStyled,
  SubMenuListStyled,
} from "../../atoms/ContextMenu/ContextMenuStled";
import { Flex, Width } from "@atoms/index";
import { MenuItem } from "@atoms/ContextMenu";
import { addCell, removeCell, changeProperty, changeCellType } from "@redux/features/noteSlice";
import { ICell, CellStyleMode, CellPropertyColor, CellTypeEnum } from "@redux/types/cell";

import ArrowIcon from '@public/ArrowIcon.svg'
import TrashIcon from '@public/TrashIcon.svg'
import DublicateIcon from '@public/DublicateIcon.svg'
import ReplacceIcon from '@public/ReplacceIcon.svg'


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
  const changeTypeHeandler = (cellType: CellTypeEnum) => {
    dispatch(changeCellType({cellId: cell.id, cellType }))
  }
  return (
    <ContextMenuStyled>
      <MenuListStyled>
        <MenuItem onClickHeandler={() => removeCellHeandler()} icon={<TrashIcon width="20px" stroke='#fff' />}>Delete cell</MenuItem>
        <MenuItem icon={<ReplacceIcon transform={"rotate(-90 0 0)"}  stroke='#fff' />}>
        <Width width="100%">
        <Flex justifyContent="space-between" alignItems="center">
          Replace to
          <ArrowIcon transform={"rotate(-90 0 0)"} />
        </Flex>
        </Width>
          <SubMenuListStyled>
            <MenuItem onClickHeandler={() => changeTypeHeandler(CellTypeEnum.STRING)}>string</MenuItem>
            <MenuItem onClickHeandler={() => changeTypeHeandler(CellTypeEnum.HEADING_LARGE)}>heading_large</MenuItem>
            <MenuItem onClickHeandler={() => changeTypeHeandler(CellTypeEnum.HEADING_MEDIUM)}>heading_medium</MenuItem>
            <MenuItem onClickHeandler={() => changeTypeHeandler(CellTypeEnum.HEADING_SMALL)}>heading_small</MenuItem>
            <MenuItem onClickHeandler={() => changeTypeHeandler(CellTypeEnum.CHECKBOX)}>checkbox</MenuItem>
            <MenuItem onClickHeandler={() => changeTypeHeandler(CellTypeEnum.LINE)}>line</MenuItem>
            <MenuItem onClickHeandler={() => changeTypeHeandler(CellTypeEnum.QUOTE)}>quote</MenuItem>
            </SubMenuListStyled>  
        </MenuItem>
        <MenuItem onClickHeandler={() => dublicateCellHeandler()} icon={<DublicateIcon  width="20px" stroke='#fff' />}>Dublicate</MenuItem>
      </MenuListStyled>
      <MenuListStyled>
        <MenuItem>
          
          <Width width="100%">
        <Flex justifyContent="space-between" alignItems="center">
        Select bg color
          <ArrowIcon transform={"rotate(-90 0 0)"} />
        </Flex>
        </Width>
          <SubMenuListStyled>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.RED, styleMode: CellStyleMode.BACKGROUND})}>red</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.BLUE, styleMode: CellStyleMode.BACKGROUND})}>blue</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.GREEN, styleMode: CellStyleMode.BACKGROUND})}>green</MenuItem>

            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.YELLOW, styleMode: CellStyleMode.BACKGROUND})}>yellow</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.PINK, styleMode: CellStyleMode.BACKGROUND})}>pink</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.ORANGE, styleMode: CellStyleMode.BACKGROUND})}>orange</MenuItem>

            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.PURPLE, styleMode: CellStyleMode.BACKGROUND})}>purple</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.BROWN, styleMode: CellStyleMode.BACKGROUND})}>brown</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.GREY, styleMode: CellStyleMode.BACKGROUND})}>greu</MenuItem>
          </SubMenuListStyled>
        </MenuItem>
        <MenuItem>
         
          <Width width="100%">
        <Flex justifyContent="space-between" alignItems="center">
          Select fg color
          <ArrowIcon transform={"rotate(-90 0 0)"} />
        </Flex>
        </Width>
          <SubMenuListStyled>
          <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.RED, styleMode: CellStyleMode.FONT_COLOR})}>red</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.BLUE, styleMode: CellStyleMode.FONT_COLOR})}>blue</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.GREEN, styleMode: CellStyleMode.FONT_COLOR})}>green</MenuItem>

            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.YELLOW, styleMode: CellStyleMode.FONT_COLOR})}>yellow</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.PINK, styleMode: CellStyleMode.FONT_COLOR})}>pink</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.ORANGE, styleMode: CellStyleMode.FONT_COLOR})}>orange</MenuItem>

            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.PURPLE, styleMode: CellStyleMode.FONT_COLOR})}>purple</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.BROWN, styleMode: CellStyleMode.FONT_COLOR})}>brown</MenuItem>
            <MenuItem onClickHeandler={() => changePropertyHeandler({color: CellPropertyColor.GREY, styleMode: CellStyleMode.FONT_COLOR})}>grey</MenuItem>
          </SubMenuListStyled>
        </MenuItem>
      </MenuListStyled>
    </ContextMenuStyled>
  );
};
for (let a of [1 ,3,4]) {
  if (a > 0) {
    console.log(123)
  }
}