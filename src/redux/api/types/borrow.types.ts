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

// summary =====================================

export interface IBorrowedSummaryClient {
  totalQuantity: number;
  title: string;
  isbn: string;
}

export interface IBorrowedSummary {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

export interface IBorrowedSummaryRes {
  success: boolean;
  message: string;
  data: IBorrowedSummary[];
}
