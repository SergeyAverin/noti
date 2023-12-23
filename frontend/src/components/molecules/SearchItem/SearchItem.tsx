import React from "react";

import NoteIcon from '@public/NoteIcon.svg'
import { BreadcrumbsStyled, ContentStyled, SearchItemStyled, SearchItomTitleStyled } from "./SearchItemStyled";


export const SearchItem: React.FC = () => {
    return (
        <SearchItemStyled>
            <SearchItomTitleStyled>
                <NoteIcon /> 
                Title
            </SearchItomTitleStyled>
            <BreadcrumbsStyled>
                /note/page
            </BreadcrumbsStyled>
            <ContentStyled>
            Ornare odio. Amet non nisi interdum leo, et. Tortor, nec nulla adipiscing libero, pellentesque ultricies. Pulvinar quam, libero, accumsan sapien et. Eget ut. Hac dictumst. Quam, morbi vulputate molestie faucibus. Ipsum aenean molestie nec ornare id sed eget sed quam, cursus pulvinar vitae imperdiet 
            </ContentStyled>
        </SearchItemStyled>
    )
}
