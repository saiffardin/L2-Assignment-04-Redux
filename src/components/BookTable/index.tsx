import { Table } from "antd";
import { IBook } from "@/redux/api/types/books.types";
import { columns } from "./columns";

interface Props {
  rows: IBook[];
}

const BookTable = ({ rows }: Props) => {
  return <Table<IBook> columns={columns} dataSource={rows} rowKey="_id" />;
};

export default BookTable;
