import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INotification } from "../types/notification";
import { NotificationVariant } from "@redux/types/notificationVariant";

interface INotificationsState {
  notifications: INotification[];
}

const initialState: INotificationsState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  initialState,
  name: "notificationsSlice",
  reducers: {
    pushNotification: (state, action: PayloadAction<INotification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: (state, action: PayloadAction<INotification>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id != action.payload.id
      );
    },
  },
});

export default notificationsSlice.reducer;

export const { removeNotification, pushNotification } =
  notificationsSlice.actions;
