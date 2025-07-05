import { RTK_TAGS } from "@/constants/rtk-tags";
import { IBook, IAllBookRes, IBookRes } from "@/redux/api/types/books.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBorrowRes, ICreateBorrow } from "./types/borrow.types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),

  tagTypes: [RTK_TAGS.BOOK, RTK_TAGS.BORROWED_BOOK],

  endpoints: (builder) => ({
    createBook: builder.mutation<IBookRes, IBook>({
      query: (body) => ({
        url: `/books`,
        method: "POST",
        body,
      }),

      invalidatesTags: [RTK_TAGS.BOOK],
    }),

    getBooks: builder.query<IAllBookRes, void>({
      query: () => "/books?limit=100",
      providesTags: [RTK_TAGS.BOOK],
    }),

    updateBook: builder.mutation<IBookRes, IBook>({
      query: ({ _id, ...patch }) => ({
        url: `/books/${_id}`,
        method: "PATCH",
        body: patch,
      }),

      invalidatesTags: [RTK_TAGS.BOOK],
    }),

    deleteBook: builder.mutation<IBookRes, IBook>({
      query: ({ _id }) => ({
        url: `/books/${_id}`,
        method: "DELETE",
      }),

      invalidatesTags: [RTK_TAGS.BOOK],
    }),

    createBorrowBook: builder.mutation<IBorrowRes, ICreateBorrow>({
      query: (body) => ({
        url: `/borrow`,
        method: "POST",
        body,
      }),

      invalidatesTags: [RTK_TAGS.BOOK],
    }),
  }),
});

export const {
  useCreateBookMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useCreateBorrowBookMutation,
} = baseApi;
