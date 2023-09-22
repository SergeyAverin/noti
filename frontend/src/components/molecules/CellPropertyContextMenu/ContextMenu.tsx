import React from "react";

import {
  ContextMenuStyled,
  MenuListStyled,
  MenuItemStyled,
  SubMenuListStyled,
} from "../../atoms/ContextMenu/ContextMenuStled";

export const ContextMenu = () => {
  return (
    <ContextMenuStyled>
      <MenuListStyled>
        <MenuItemStyled>Delete cell</MenuItemStyled>
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
