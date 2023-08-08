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
    addTrash: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/trash`,
          method: "POST",
        };
      },
      invalidatesTags: [TAGS.NOTE],
    }),
    removeTrash: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/trash`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAGS.NOTE],
    }),
    addBookmark: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/bookmark`,
          method: "POST",
        };
      },
      invalidatesTags: [TAGS.NOTE],
    }),
    removeBookmark: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/bookmark`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAGS.NOTE],
    }),
  }),
});

export const {
  useGetTrashQuery,
  useGetBookmarkQuery,
  useGetRootQuery,
  useAddTrashMutation,
  useRemoveTrashMutation,
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} = libraryApi;
