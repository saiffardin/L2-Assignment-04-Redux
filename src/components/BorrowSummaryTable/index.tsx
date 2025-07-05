import { Table } from "antd";
import { IBorrowedSummaryClient } from "@/redux/api/types/borrow.types";
import { columns } from "./columns";

interface Props {
  rows: IBorrowedSummaryClient[];
}

const BorrowSummaryTable = ({ rows }: Props) => {
  return (
    <Table<IBorrowedSummaryClient>
      columns={columns}
      dataSource={rows}
      rowKey="isbn"
    />
  );
};

export default BorrowSummaryTable;
