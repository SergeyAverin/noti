import { baseApi } from "./baseApi";
import { INote } from "../types/note";
import { TAGS } from "./tags";

export const noteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useCreateNoteMutation } = noteApi;
