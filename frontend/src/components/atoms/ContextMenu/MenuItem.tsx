import React from "react";

import { MenuItemStyled } from "./ContextMenuStled";

interface IMenuItemProps {
    icon?: React.ReactNode
    children: React.ReactNode,
    onClickHeandler?: Function
}
export const MenuItem: React.FC<IMenuItemProps> = ({ icon, children, onClickHeandler }) => {
    return (
        <MenuItemStyled onClick={(event: React.MouseEvent) => onClickHeandler && onClickHeandler()}>
            {icon}
            {children}
        </MenuItemStyled>
    )
}
