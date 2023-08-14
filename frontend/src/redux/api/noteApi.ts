import { baseApi } from "./baseApi";
import { INote } from "../types/note";
import { TAGS } from "./tags";
import { ICell } from "@redux/types/cell";
import { setNote } from "@redux/features/noteSlice";

export const noteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNote: builder.query<INote, string>({
      query(slug: string) {
        return {
          url: `notes/${slug}`,
        };
      },
      providesTags: [TAGS.NOTE, TAGS.TRASH],
    }),

    loadNote: builder.mutation<ICell[], string>({
      query(slug) {
        return {
          url: `notes/${slug}/content`,
          method: "GET",
        };
      },
      invalidatesTags: [TAGS.NOTE],
    }),

    changeNoteTitle: builder.mutation<void, { slug: string; title: string }>({
      query({ slug, title }) {
        return {
          url: `notes/${slug}`,
          method: "PATCH",
          body: {
            slug,
            title,
          },
        };
      },
      invalidatesTags: [TAGS.NOTE, TAGS.ROOT_NOTES, TAGS.TRASH, TAGS.BOOKMARK],
    }),

    createNote: builder.mutation<INote, { title: string }>({
      query({ title }) {
        return {
          url: "notes",
          method: "POST",
          body: {
            title: title,
          },
        };
      },
      invalidatesTags: [TAGS.NOTE, TAGS.ROOT_NOTES],
    }),
    saveNote: builder.mutation<INote, { slug: string; content: ICell[] }>({
      query({ slug, content }) {
        return {
          url: `notes/${slug}/content`,
          method: "POST",
          body: content,
        };
      },
      invalidatesTags: [TAGS.NOTE],
    }),
  }),
});

export const {
  useGetNoteQuery,
  useCreateNoteMutation,
  useLoadNoteMutation,
  useSaveNoteMutation,
  useChangeNoteTitleMutation,
} = noteApi;
