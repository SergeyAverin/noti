import React, { ChangeEventHandler, useState } from "react";

import { TitleStyled, TitleLineStyled, TitleInputStyled } from "./TitleStyled";

interface ITitleProps {
    title: string
}

export const Title: React.FC<ITitleProps> = ({ title }) => {
    const [titleState, setTitleState] = useState(title) 
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleState(event.target.value)
    }
    return (
        <TitleStyled>
            <TitleInputStyled value={ titleState } onChange={onChange} />
            <TitleLineStyled />
        </TitleStyled>
    )
}
