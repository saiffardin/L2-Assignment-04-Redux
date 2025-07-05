import { type TBookFormData } from "@/validations/book-validations";
import { type TBorrowFormData } from "@/validations/borrow-validations";

export type FormData = TBookFormData | TBorrowFormData;

type UnionKeys<T> = T extends unknown ? keyof T : never;
export type FormDataKeys = UnionKeys<FormData>;

export type TypeValidateStatus =
  | ""
  | "error"
  | "success"
  | "warning"
  | "validating"
  | undefined;
