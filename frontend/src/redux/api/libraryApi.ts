import { baseApi } from "./baseApi";
import { INote } from "../types/note";

export const libraryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrash: builder.query<INote[], void>({
      query() {
        return {
          url: "notes/trash",
        };
      },
    }),
    getBookmark: builder.query<INote[], void>({
      query() {
        return {
          url: "notes/bookmark",
        };
      },
    }),
  }),
});

export const { useGetTrashQuery, useGetBookmarkQuery } = libraryApi;
