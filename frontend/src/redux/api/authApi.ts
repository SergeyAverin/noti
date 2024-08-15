import { IToken } from "@redux/types/token";
import { IUser } from "@redux/types/user";
import { setActiveUser } from "@redux/features/userSlice";
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
          const user = res.data.user as IUser;

          const authUsersFromLocalStorage = localStorage.getItem("users");
          let authUsers: Array<{ user: IUser; token: string }> = [];

          if (authUsersFromLocalStorage) {
            authUsers = JSON.parse(authUsersFromLocalStorage);
          }

          const index = authUsers.findIndex(
            (item) => item.user.email === user.email
          );

          if (index < 0) {
            authUsers.push({ user: user, token: res.data.token.token });
          }

          dispatch(setActiveUser({ user, token: res.data.token.token }));
          localStorage.setItem("token", res.data.token.token);
          localStorage.setItem("users", JSON.stringify(authUsers));
          localStorage.setItem("activeUser", JSON.stringify(user));
        } catch (error) {
          console.log("err");
          console.log(error);
        }
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
