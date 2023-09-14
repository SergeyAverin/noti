import React, { ChangeEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useChangeNoteTitleMutation } from "@redux/api/noteApi";
import { pushNotification } from "@redux/features/notificationsSlice";
import { TitleStyled, TitleLineStyled, TitleInputStyled } from "./TitleStyled";
import { NotificationVariant } from "@redux/types/notificationVariant";

interface ITitleProps {
    title: string,
    slug: string
}

export const Title: React.FC<ITitleProps> = ({ title, slug }) => {
    const [titleState, setTitleState] = useState(title) ;
    const dispatch = useDispatch()
    useEffect(() => {
        setTitleState(title)
    }, [title])
    const [changeNoteTitle] = useChangeNoteTitleMutation()
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleState(event.target.value)
    }
    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeNoteTitle({slug, title: event.target.value})
        const notification ={
            title: "Saved title",
            description:`new title is ${title}`,
            variant: NotificationVariant.DANGER,
            date: new Date()
            // secondsToAutoClose: 1500,
          }
        dispatch(pushNotification(notification))
    }
    return (
        <TitleStyled>
            <TitleInputStyled value={ titleState } onChange={onChange} onBlur={onBlur} />
            <TitleLineStyled />
        </TitleStyled>
    )
}
