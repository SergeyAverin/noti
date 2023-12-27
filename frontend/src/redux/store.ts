import { configureStore } from "@reduxjs/toolkit";

import { userApi } from "./api/userApi";
import { authApi } from "./api/authApi";
import { searchApi } from "./api/searchApi";

import userReducer from "./features/userSlice";
import noteReducer from "./features/noteSlice";
import notificationsSlice from "./features/notificationsSlice";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [searchApi.reducerPath]: searchApi.reducer,
    userState: userReducer,
    noteState: noteReducer,
    notificationState: notificationsSlice,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
