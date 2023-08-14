import { baseApi } from "./baseApi";
import { INote } from "../types/note";
import { TAGS } from "./tags";
import { ICell } from "@redux/types/cell";

export const noteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getNote: builder.query<INote, string>({
      query(slug: string) {
        return {
          url: `notes/${slug}`,
        };
      },
      providesTags: [TAGS.NOTE],
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
      invalidatesTags: [TAGS.NOTE],
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

export const { useGetNoteQuery, useCreateNoteMutation, useSaveNoteMutation } =
  noteApi;
