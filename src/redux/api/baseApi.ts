import { RTK_TAGS } from "@/constants/rtk-tags";
import { IBook, IBookRes } from "@/redux/api/types/books.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),

  tagTypes: [RTK_TAGS.BOOK, RTK_TAGS.BORROWED_BOOK],

  endpoints: (builder) => ({
    getBooks: builder.query<IBookRes, void>({
      query: () => "/books?limit=100",
      providesTags: [RTK_TAGS.BOOK],
    }),

    updateBook: builder.mutation<IBookRes, IBook>({
      query: ({ _id, ...patch }) => ({
        url: `books/${_id}`,
        method: "PATCH",
        body: patch,
      }),

      invalidatesTags: [RTK_TAGS.BOOK],
    }),

    deleteBook: builder.mutation<IBookRes, IBook>({
      query: ({ _id }) => ({
        url: `books/${_id}`,
        method: "DELETE",
      }),

      invalidatesTags: [RTK_TAGS.BOOK],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = baseApi;
