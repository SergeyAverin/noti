import React from "react";

import NoteIcon from '@public/NoteIcon.svg'
import { BreadcrumbsStyled, ContentStyled, SearchItemStyled, SearchItomTitleStyled, MarkerStyled } from "./SearchItemStyled";
import { TextMarker } from "./TextMarket";


export const SearchItem: React.FC = () => {
    const content = 'Ornare odio. Amet non nisi interdum leo, et. Tortor, nec nulla adipiscing libero, pellentesque ultricies. Pulvinar quam, libero, accumsan sapien et. Eget ut. Hac dictumst. Quam, morbi vulputate molestie faucibus. Ipsum aenean molestie nec ornare id sed eget sed quam, cursus pulvinar vitae imperdiet '
    const searchString = 'non'
    const title = 'Ornare odio. Amet nonet '
    return (
        <SearchItemStyled>
            <SearchItomTitleStyled>
                <NoteIcon /> 
                <TextMarker text={title}  markerString={searchString} />
            </SearchItomTitleStyled>
            <BreadcrumbsStyled>
                /note/page
            </BreadcrumbsStyled>
            <ContentStyled>
            <TextMarker text={content}  markerString={searchString} />
            </ContentStyled>
        </SearchItemStyled>
    )
}
