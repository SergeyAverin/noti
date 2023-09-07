import React from "react";

import { NotificationTitleStyled, NotificationDescriptionStyled, NotificationStyled, NotificationCloseStyled } from './NotificationStyled'
import { Margin } from "@atoms/index";

import CloseIcon from '@public/CloseIcon.svg'


interface INotificationProps {
    title: string,
    description: string,
    buttonsSlot?: React.ReactNode
}

export const Notification: React.FC<INotificationProps> = ({ title, description, buttonsSlot }) => {
    return (
        <NotificationStyled>
            <NotificationCloseStyled>
                <CloseIcon />
            </NotificationCloseStyled>
            <NotificationTitleStyled>{title}</NotificationTitleStyled>
            <NotificationDescriptionStyled>{description}</NotificationDescriptionStyled>
            <Margin mt={20}>
                { buttonsSlot }
            </Margin>
        </NotificationStyled>
    )
}
