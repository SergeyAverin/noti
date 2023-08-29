import React, { ChangeEventHandler, useEffect, useState } from "react";

import { TitleStyled, TitleLineStyled, TitleInputStyled } from "./TitleStyled";
import { useChangeNoteTitleMutation } from "@redux/api/noteApi";

interface ITitleProps {
    title: string,
    slug: string
}

export const Title: React.FC<ITitleProps> = ({ title, slug }) => {
    const [titleState, setTitleState] = useState(title) 
    useEffect(() => {
        setTitleState(title)
    }, [title])
    const [changeNoteTitle] = useChangeNoteTitleMutation()
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleState(event.target.value)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeNoteTitle({slug, title: event.target.value})
    }
    return (
        <TitleStyled>
            <TitleInputStyled value={ titleState } onChange={onChange} onBlur={onBlur} />
            <TitleLineStyled />
        </TitleStyled>
    )
}
