import type { TableProps } from "antd";
import { Space, Tag } from "antd";
import { GENRE_TAG_COLORS } from "@/constants/book-genre";
import { IBook } from "@/redux/api/types/books.types";
import ActionEdit from "./ActionEdit";
import ActionDelete from "./ActionDelete";
import ActionBorrow from "./ActionBorrow";

export const columns: TableProps<IBook>["columns"] = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },

  {
    title: "Author",
    dataIndex: "author",
    key: "author",
  },

  {
    title: "Genre",
    key: "genre",
    dataIndex: "genre",
    render: (_, { genre }) => {
      return (
        genre && (
          <Tag color={GENRE_TAG_COLORS[genre]} key={genre}>
            {genre.toUpperCase()}
          </Tag>
        )
      );
    },
  },

  {
    title: "ISBN",
    dataIndex: "isbn",
    key: "isbn",
  },

  {
    title: "Copies",
    dataIndex: "copies",
    key: "copies",
  },

  {
    title: "Availability",
    dataIndex: "availability",
    key: "availability",
    render: (_, { available }) => {
      const text = available ? "IN STOCK" : "OUT OF STOCK";

      return (
        <Tag color={available ? "green" : "red"} key={text}>
          {text.toUpperCase()}
        </Tag>
      );
    },
  },

  {
    title: "Action",
    key: "action",
    render: (_, row) => {
      return (
        <Space size="middle">
          <ActionEdit row={row} />
          <ActionDelete row={row} />
          <ActionBorrow row={row} />
        </Space>
      );
    },
  },
];
