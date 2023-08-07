import { baseApi } from "./baseApi";
import { INote } from "../types/note";
import { TAGS } from "./tags";

export const libraryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTrash: builder.query<INote[], void>({
      query() {
        return {
          url: "notes/trash",
        };
      },
      providesTags: [TAGS.NOTE],
    }),
    getBookmark: builder.query<INote[], void>({
      query() {
        return {
          url: "notes/bookmark",
        };
      },
      providesTags: [TAGS.NOTE],
    }),
    getRoot: builder.query<INote[], void>({
      query() {
        return {
          url: "notes/root",
        };
      },
      providesTags: [TAGS.NOTE],
    }),
  }),
});

export const { useGetTrashQuery, useGetBookmarkQuery, useGetRootQuery } =
  libraryApi;
