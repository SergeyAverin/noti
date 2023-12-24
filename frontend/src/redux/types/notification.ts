export interface INotification {
  title: string;
  description: string;
  date: Date;
  secondsToAutoClose?: number;
  id: string;
}
