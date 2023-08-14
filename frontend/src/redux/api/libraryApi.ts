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
      providesTags: [TAGS.TRASH],
    }),
    getBookmark: builder.query<INote[], void>({
      query() {
        return {
          url: "notes/bookmark",
        };
      },
      providesTags: [TAGS.BOOKMARK],
    }),
    getRoot: builder.query<INote[], void>({
      query() {
        return {
          url: "notes/root",
        };
      },
      providesTags: [TAGS.ROOT_NOTES, TAGS.TRASH],
    }),
    addTrash: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/trash`,
          method: "POST",
        };
      },
      invalidatesTags: [TAGS.TRASH],
    }),
    removeTrash: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/trash`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAGS.TRASH],
    }),
    addBookmark: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/bookmark`,
          method: "POST",
        };
      },
      invalidatesTags: [TAGS.BOOKMARK],
    }),
    removeBookmark: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/${slug}/bookmark`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAGS.BOOKMARK],
    }),
    cleanTrash: builder.mutation<void, void>({
      query(slug) {
        return {
          url: `notes/trash`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAGS.TRASH],
    }),
    removeNote: builder.mutation<void, string>({
      query(slug) {
        return {
          url: `notes/trash/${slug}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAGS.TRASH],
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
  useCleanTrashMutation,
  useRemoveNoteMutation,
} = libraryApi;
