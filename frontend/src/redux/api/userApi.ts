import { baseApi } from "../baseApi";
import { setActiveUser } from "../features/userSlice";
import { IUser } from "../types/user";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<IUser, null>({
      query() {
        return {
          url: "account/profile",
          credentials: "include",
        };
      },
      transformResponse: (result: { data: { user: IUser } }) =>
        result.data.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setActiveUser({ user: data, token: null }));
        } catch (error) {}
      },
    }),
  }),
});

export const { useGetProfileQuery } = userApi;
