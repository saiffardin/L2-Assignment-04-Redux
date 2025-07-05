export interface ICreateBorrow {
  book: string;
  quantity: number;
  dueDate: string;
}

export interface IBorrowBook {
  _id?: string;
  book?: string;
  quantity?: number;
  dueDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBorrowRes {
  success: boolean;
  message: string;
  data: IBorrowBook;
}
