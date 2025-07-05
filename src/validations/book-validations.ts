import { BOOK_GENRE } from "@/constants/book-genre";
import { BookGenreType } from "@/redux/api/types/books.types";
import * as yup from "yup";

export const bookValidations = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .min(1, "Title cannot be empty"),

  author: yup
    .string()
    .required("Author is required")
    .min(1, "Author cannot be empty"),

  genre: yup
    .mixed<BookGenreType>()
    .oneOf(BOOK_GENRE)
    .required("Genre is required"),

  isbn: yup
    .string()
    .required("ISBN is required")
    .matches(/^[\d-]+$/, "ISBN must contain only numbers and hyphens"),

  description: yup.string().optional(),

  copies: yup
    .number()
    .required("Number of copies is required")
    .min(0, "Must be a positive number")
    .integer("Must be a whole number"),

  available: yup.boolean().default(true),
});

export type TBookFormData = yup.InferType<typeof bookValidations>;
