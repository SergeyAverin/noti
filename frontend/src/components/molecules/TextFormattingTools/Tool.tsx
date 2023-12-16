import React, { useState } from "react";

import { ToolStyled } from "./TextFormattingToolsStyled";

interface IToolProps {
    children: React.ReactNode,
    onClick: Function, 
    isActive: boolean
}
export const Tool: React.FC<IToolProps> = ({ children, onClick, isActive }) => {
    const onClickHeandler = () => {
        onClick()
    }
    return (
        <ToolStyled isActive={isActive} onClick={onClickHeandler}>
            <div>
                { children }
            </div>
        </ToolStyled>
    )
}
