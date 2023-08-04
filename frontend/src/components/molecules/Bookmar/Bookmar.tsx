import React from "react";

import { ToggleMenu, Margin } from "@atoms/index";

import BookmarkIcon from '@public/BookmarkIcon.svg'

export const Bookmark: React.FC = () =>{
    return (
        <ToggleMenu text="Bookmark"  icon={<BookmarkIcon />}>
            <Margin ml={30}>
                <ToggleMenu text="tesx">d</ToggleMenu>
            </Margin>
        </ToggleMenu>
    )
}
