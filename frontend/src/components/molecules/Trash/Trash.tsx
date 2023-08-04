import React from "react";

import { ToggleMenu, Margin } from "@atoms/index";

import TrashIcon from '@public/TrashIcon.svg'

export const Trash: React.FC = () =>{
    return (
        <ToggleMenu text="Trash"  icon={<TrashIcon />}>
            <Margin ml={30}>
                <ToggleMenu text="tesx">d</ToggleMenu>
            </Margin>
        </ToggleMenu>
    )
}
