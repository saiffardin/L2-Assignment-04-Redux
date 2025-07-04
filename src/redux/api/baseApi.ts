import { IBookRes } from "@/pages/BooksPage/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),

  endpoints: (builder) => ({
    getBooks: builder.query<IBookRes, void>({
      query: () => "/books?limit=100",
    }),
  }),
});

export const { useGetBooksQuery } = baseApi;
