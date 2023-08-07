import React from "react";

import { HeaderStyled } from './HeaderStyled'

import BookmarkIcon from '@public/BookmarkIcon.svg';
import TrashIcon from '@public/TrashIcon.svg'

export const Header: React.FC = () => {

    return (
        <HeaderStyled>
            <div>s</div>
            <div>
                <BookmarkIcon />
                <TrashIcon />
            </div>
        </HeaderStyled>
    )
}
