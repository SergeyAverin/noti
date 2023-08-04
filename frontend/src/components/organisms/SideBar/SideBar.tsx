import React from "react";

import { Trash } from "@molecules/Trash";
import { SideBarStyled } from "./SideBarStyled";


export const SideBar: React.FC = () => {
    return (
        <SideBarStyled>
            <Trash />
        </SideBarStyled>
    )
}
