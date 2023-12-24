import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { pushNotification } from "@redux/features/notificationsSlice";
import { NotificationVariant } from "@redux/types/notificationVariant";

export const useCreateNotification = () => {
  const dispatch = useDispatch();
  const createNotification = (title: string, description: string) => {
    const notification = {
      title: title,
      id: uuidv4(),
      description: description,
      variant: NotificationVariant.DANGER,
      date: new Date(),
      // secondsToAutoClose: 1500,
    };
    dispatch(pushNotification(notification));
  };
  return createNotification;
};
