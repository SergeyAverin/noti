import { baseApi } from "../baseApi";
import { TAGS } from "../tags";

export interface ISearchNoteResponse {
  notes: Array<INoteFromSearch>;
}

export interface INoteFromSearch {
  slug: string;
  title: string;
  content: string;
}

export const searchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    searchNote: builder.mutation<ISearchNoteResponse, string>({
      query(searchString) {
        return {
          url: `search?q=${searchString}`,
          method: "GET",
        };
      },
      invalidatesTags: [TAGS.SEARCH],
    }),
  }),
});

export const { useSearchNoteMutation } = searchApi;
