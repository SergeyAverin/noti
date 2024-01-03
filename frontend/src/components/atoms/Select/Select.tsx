import React, { useState } from "react";

import { SelectItemsStyled, SelectItemStyled, SelectTitleStyled } from "./SelectStyled";

import Arrow from "@public/AddIcon.svg";


interface ISelectProps {
    items: string[],
    selectItem: string,
    onSelect: Function,
}

export const Select:React.FC<ISelectProps> = ({ items, selectItem, onSelect }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeItem, setActiveItem] = useState(selectItem);

    const setActiveItemHandler:React.MouseEventHandler<HTMLElement> = (event) => {
        setIsOpen((prev) => !prev);
        const target = event.target as HTMLElement;
        setActiveItem(target.innerText);
        onSelect(target.innerText)
    };

    return (
        <div>
            <SelectTitleStyled onClick={() => setIsOpen((prev) => !prev)}>
                <Arrow transform={isOpen ? "rotate(-90 0 0)" : "rotate(0 0 0)"} />
                { activeItem }
            </SelectTitleStyled>
            <SelectItemsStyled isOpen={isOpen}>
                <ul onClick={setActiveItemHandler}>
                    { items.map((item) => (<SelectItemStyled key={item}>{item}</SelectItemStyled>)) }
                </ul>
            </SelectItemsStyled>
        </div>
    )
};
