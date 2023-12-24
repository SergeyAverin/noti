import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { pushNotification } from "@redux/features/notificationsSlice";

export const useCreateNotification = () => {
  const dispatch = useDispatch();
  const createNotification = (title: string, description: string) => {
    const notification = {
      id: uuidv4(),
      date: new Date(),
      title: title,
      description: description,
      // secondsToAutoClose: 1500,
    };
    dispatch(pushNotification(notification));
  };
  return createNotification;
};
