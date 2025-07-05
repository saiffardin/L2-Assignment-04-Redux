import { TableProps } from "antd";
import { IBorrowedSummaryClient } from "@/redux/api/types/borrow.types";

export const columns: TableProps<IBorrowedSummaryClient>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },

  {
    title: "ISBN",
    dataIndex: "isbn",
    key: "isbn",
  },

  {
    title: "Borrowed Quantity",
    dataIndex: "totalQuantity",
    key: "totalQuantity",
  },
];
