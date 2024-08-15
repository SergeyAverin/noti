import { RootState } from "@redux/store";

export const notificationsSelector = (state: RootState) =>
  state.notificationState.notifications;
