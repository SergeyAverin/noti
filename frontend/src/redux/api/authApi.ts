import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { IToken } from "@redux/types/token";
import { IUser } from "@redux/types/user";
import { setUser } from "@redux/features/userSlice";
import { baseQuery } from "./baseQuery";

interface createUserDTO {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: IToken; user: IUser },
      { email: string; password: string }
    >({
      query(data) {
        return {
          url: "account/login",
          method: "POST",
          body: data,
          credentials: "include",
        };
      },
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled;
          dispatch(setUser(res.data.user));
          localStorage.setItem("token", res.data.token.token);
        } catch (error) {}
      },
    }),
    registration: builder.mutation<IUser, createUserDTO>({
      query(data) {
        return {
          url: "account/registration",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegistrationMutation } = authApi;
