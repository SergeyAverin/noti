import { IToken } from "@redux/types/token";
import { IUser } from "@redux/types/user";
import { setUser } from "@redux/features/userSlice";
import { baseApi } from "../baseApi";

interface createUserDTO {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export const authApi = baseApi.injectEndpoints({
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
          const authUsersFromLocalStorage = localStorage.getItem("users");
          let authUsers = [];
          if (authUsersFromLocalStorage) {
            authUsers = JSON.parse(authUsersFromLocalStorage);
          }
          authUsers.push(res.data.user);
          localStorage.setItem("users", JSON.stringify(authUsers));
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
