import React, { Children, useState } from "react";

import  {ContextMenuItem} from './ContextMenuItem'
import { ContextMenuItemDropDownList } from "./ContextMenuItemDropDownStyled";


interface IContextMenuItemDropDownProps {
    text: string,
    children: React.ReactNode
}

export const ContextMenuItemDropDown: React.FC<IContextMenuItemDropDownProps> = ({ children, text }) => {
    const [isOpen, setIsOpen] = useState(false)
    const onMoveEnterHeandler = () => {
        setIsOpen(true)
    }
    const onMoveLeaveHeandler = () => {
        setIsOpen(false)
    }

    return (
        <>
            <ContextMenuItem>
                <div onMouseEnter={onMoveEnterHeandler} onMouseLeave={onMoveLeaveHeandler}>
                    { text }
                    { isOpen && 
                    <ContextMenuItemDropDownList>
                        { children }
                    </ContextMenuItemDropDownList>
                    }
                </div>
            </ContextMenuItem>
        </>
    )
}
