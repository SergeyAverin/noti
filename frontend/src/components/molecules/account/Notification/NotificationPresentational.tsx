import React from "react";

import {
  NotificationTitleStyled,
  NotificationDescriptionStyled,
  NotificationStyled,
  NotificationCloseStyled,
} from "./NotificationStyled";
import { Icon, Margin } from "@atoms/index";
import { INotification } from "@redux/types/notification";

import CloseIcon from "@public/CloseIcon.svg";

interface INotificationPresentationalProps {
  closeNotification: (event: React.MouseEvent) => void;
  notification: INotification;
  buttonsSlot: React.ReactNode;
  isFadeOutAnimation: boolean;
}

export const NotificationPresentational: React.FC<
  INotificationPresentationalProps
> = ({ buttonsSlot, closeNotification, notification, isFadeOutAnimation }) => {
  return (
    <NotificationStyled isFadeOutAnimation={isFadeOutAnimation}>
      <NotificationCloseStyled onClick={closeNotification}>
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
