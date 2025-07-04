import { Table } from "antd";
import { IBook } from "@/pages/BooksPage/types";
import { getBookCols } from "@/pages/BooksPage/columns";

interface Props {
  rows: IBook[];
}

const BookTable = ({ rows }: Props) => {
  const handleEditBook = (row: IBook) => {
    console.log("================ EDIT");
    console.log(row);
  };

  const handleDeleteBook = (row: IBook) => {
    console.log("================ delete");
    console.log(row);
  };

  const handleBorrowBook = (row: IBook) => {
    console.log("================ Borrow");
    console.log(row);
  };

  return (
    <Table<IBook>
      columns={getBookCols({
        onBookBorrow: handleBorrowBook,
        onBookEdit: handleEditBook,
        onBookDelete: handleDeleteBook,
      })}
      dataSource={rows}
      rowKey="_id"
    />
  );
};

export default BookTable;
