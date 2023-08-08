import React from "react";

import { TitleStyled, TitleLineStyled } from "./TitleStyled";

interface ITitleProps {
    title: string
}

export const Title: React.FC<ITitleProps> = ({ title }) => {
    return (
        <TitleStyled>
            <h1>{ title }</h1>
            <TitleLineStyled />
        </TitleStyled>
    )
}
