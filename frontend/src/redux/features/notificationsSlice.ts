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
    },
  ],
};

export const notificationsSlice = createSlice({
  initialState,
  name: "notificationsSlice",
  reducers: {
    pushNotification: (state, action: PayloadAction<INotification>) => {},
    removeNotification: (state, action: PayloadAction<INotification>) => {},
  },
});

export default notificationsSlice.reducer;

export const { pushNotification } = notificationsSlice.actions;
