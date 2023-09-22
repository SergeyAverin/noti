import React from "react";

import {
  ContextMenuStyled,
  MenuListStyled,
  MenuItemStyled
} from "../../atoms/ContextMenu/ContextMenuStled";

export const ContextMenu = () => {
  return (
    <ContextMenuStyled>
        <MenuListStyled>
            <MenuItemStyled>String</MenuItemStyled>
            <MenuItemStyled>H1</MenuItemStyled>
            <MenuItemStyled>H2</MenuItemStyled>
            <MenuItemStyled>H3</MenuItemStyled>
            <MenuItemStyled>Checkbox</MenuItemStyled>
            <MenuItemStyled>Line</MenuItemStyled>
            <MenuItemStyled>Quote</MenuItemStyled>
            <MenuItemStyled>Toggle list</MenuItemStyled>
            <MenuItemStyled>Page</MenuItemStyled>
            <MenuItemStyled>Image</MenuItemStyled>
            <MenuItemStyled>Table</MenuItemStyled>
            <MenuItemStyled>Number list</MenuItemStyled>
            <MenuItemStyled>Mark list</MenuItemStyled>
        </MenuListStyled>
    </ContextMenuStyled>
  );
};
