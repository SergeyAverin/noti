import React, { useEffect, useState } from "react";

import { useChangeNoteTitleMutation } from "@redux/api/noteApi";

import { TitleStyled, TitleLineStyled, TitleInputStyled } from "./TitleStyled";
import { useCreateNotification } from "@hooks/useCreateNotification";

interface ITitleProps {
    title: string,
    slug: string
}

export const Title: React.FC<ITitleProps> = ({ title, slug }) => {
    const [titleState, setTitleState] = useState(title) ;
    const createNotification = useCreateNotification()
    useEffect(() => {
        setTitleState(title)
    }, [title])
    const [changeNoteTitle] = useChangeNoteTitleMutation()
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleState(event.target.value)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeNoteTitle({slug, title: event.target.value})
        createNotification("Saved title", `new title is ${title}`)
    }
    return (
        <TitleStyled>
            <TitleInputStyled value={ titleState } onChange={onChange} onBlur={onBlur} />
            <TitleLineStyled />
        </TitleStyled>
    )
}
