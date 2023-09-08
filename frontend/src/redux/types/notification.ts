import { NotificationVariant } from "./notificationVariant";

export interface INotification {
  title: string;
  description: string;
  variant: NotificationVariant;
  date: Date;
  secondsToAutoClose: number;
}
