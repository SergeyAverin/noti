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
  }),
});

export const { useGetTrashQuery } = libraryApi;
