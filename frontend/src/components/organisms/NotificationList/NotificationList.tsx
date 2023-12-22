import React from "react";
import ReactDOM from 'react-dom';
import { useSelector } from "react-redux";

import { NotificationListStyled } from "./NotificationListStyled";
import { Margin } from "@atoms/index";
import { Notification } from "@molecules/Notification";
import { notificationsSelector } from "@redux/selectors/notifications";


export const NotificationList = () => {
    const notifications = useSelector(notificationsSelector)
    return (
        ReactDOM.createPortal(
          <NotificationListStyled>
            { notifications.map(notification => 
                <Margin mt={15}>
                    <Notification notification={notification} secondsToAutoClose={notification.secondsToAutoClose}/>
                </Margin>
            )}
          </NotificationListStyled>,
          document.getElementById('notification-root') as  HTMLElement 
        )
      );
}
