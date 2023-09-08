import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INotification } from "../types/notification";
import { NotificationVariant } from "@redux/types/notificationVariant";

interface INotificationsState {
  notifications: INotification[];
}

const initialState: INotificationsState = {
  notifications: [
    {
      title: "title",
      description: "text",
      variant: NotificationVariant.DANGER,
      date: new Date(),
    },
    {
      title: "title2",
      description: "text",
      variant: NotificationVariant.DANGER,
      date: new Date(),
    },
  ],
};

export const notificationsSlice = createSlice({
  initialState,
  name: "notificationsSlice",
  reducers: {
    pushNotification: (state, action: PayloadAction<INotification>) => {},
    removeNotification: (state, action: PayloadAction<INotification>) => {
      state.notifications = state.notifications.filter(
        (notification) =>
          notification.title != action.payload.title &&
          notification.date != action.payload.date
      );
    },
  },
});

export default notificationsSlice.reducer;

export const { removeNotification } = notificationsSlice.actions;
