import React from "react";
import { useDispatch } from "react-redux";

import { INotification } from "@redux/types/notification";
import { removeNotification } from "@redux/features/notificationsSlice";
import { NotificationTitleStyled, NotificationDescriptionStyled, NotificationStyled, NotificationCloseStyled } from './NotificationStyled'
import { Margin } from "@atoms/index";

import CloseIcon from '@public/CloseIcon.svg'


interface INotificationProps {
    notification: INotification
    buttonsSlot?: React.ReactNode
}

export const Notification: React.FC<INotificationProps> = ({ notification, buttonsSlot }) => {
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(removeNotification(notification))
    }
    return (
        <NotificationStyled>
            <NotificationCloseStyled onClick={onClose}>
                <CloseIcon />
            </NotificationCloseStyled>
            <NotificationTitleStyled>{ notification.title }</NotificationTitleStyled>
            <NotificationDescriptionStyled>{ notification.description }</NotificationDescriptionStyled>
            <Margin mt={20}>
                { buttonsSlot }
            </Margin>
        </NotificationStyled>
    )
}
