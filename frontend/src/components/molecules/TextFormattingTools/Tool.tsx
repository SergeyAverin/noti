import React, { useState } from "react";

import { ToolStyled } from "./TextFormattingToolsStyled";

interface IToolProps {
    children: React.ReactNode,
    onClick: Function
}
export const Tool: React.FC<IToolProps> = ({ children, onClick }) => {
    const [isActive, setIsActive] = useState(false)
    const onClickHeandler = () => {
        onClick()
        setIsActive((prev) => !prev)
    }
    return (
        <ToolStyled isActive={isActive} onClick={onClickHeandler}>
            { children }
        </ToolStyled>
    )
}
