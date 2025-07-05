import { BOOK_GENRE } from "@/constants/book-genre";

export type BookGenreType = (typeof BOOK_GENRE)[number];

export interface IBook {
  _id?: string;
  title?: string;
  author?: string;
  genre?: BookGenreType;
  isbn?: string;
  description?: string;
  copies?: number;
  available?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface IAllBookRes {
  success: boolean;
  message: string;
  data: IBook[];
}

export interface IBookRes {
  success: boolean;
  message: string;
  data: IBook;
}
