import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { INotification } from "@redux/types/notification";
import { removeNotification } from "@redux/features/notificationsSlice";
import {
  NotificationTitleStyled,
  NotificationDescriptionStyled,
  NotificationStyled,
  NotificationCloseStyled,
} from "./NotificationStyled";
import { Icon, Margin } from "@atoms/index";

import CloseIcon from "@public/CloseIcon.svg";

interface INotificationProps {
  notification: INotification;
  buttonsSlot?: React.ReactNode;
  secondsToAutoClose?: number;
}

export const Notification: React.FC<INotificationProps> = ({
  notification,
  buttonsSlot,
  secondsToAutoClose,
}) => {
  const [fadeOutAnimation, setFadeOutAnimation] = useState(false);
  const dispatch = useDispatch();
  const onClose = () => {
    setFadeOutAnimation(true);
    dispatch(removeNotification(notification));
  };
  useEffect(() => {
    if (secondsToAutoClose) {
      setTimeout(() => {
        setFadeOutAnimation(true);
        dispatch(removeNotification(notification));
      }, secondsToAutoClose);
    }
  });
  return (
    <NotificationStyled fadeOutAnimation={fadeOutAnimation}>
      <NotificationCloseStyled onClick={onClose}>
        <Icon icon={<CloseIcon />} />
      </NotificationCloseStyled>
      <NotificationTitleStyled>{notification.title}</NotificationTitleStyled>
      <NotificationDescriptionStyled>
        {notification.description}
      </NotificationDescriptionStyled>
      <Margin mt={20}>{buttonsSlot}</Margin>
    </NotificationStyled>
  );
};
