import { DeleteOutlined, EditOutlined, SwapOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Button, Space, Tag } from "antd";
import { IBook } from "./types";
import { GENRE_TAG_COLORS } from "@/constants/book-genre";

type TypeColRet = TableProps<IBook>["columns"];

interface Props {
  onBookEdit: (row: IBook) => void;
  onBookDelete: (row: IBook) => void;
  onBookBorrow: (row: IBook) => void;
}

export const getBookCols = (props: Props): TypeColRet => {
  const { onBookEdit, onBookBorrow, onBookDelete } = props;

  return [
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
      title: "Copies",
      dataIndex: "copies",
      key: "Copies",
    },

    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
    },

    {
      title: "Action",
      key: "action",
      render: (_, row) => {
        return (
          <Space size="middle">
            <Button
              color="blue"
              variant="filled"
              title="Edit Book"
              onClick={() => onBookEdit(row)}
            >
              <EditOutlined />
            </Button>

            <Button
              color="danger"
              variant="filled"
              title="Delete Book"
              onClick={() => onBookDelete(row)}
            >
              <DeleteOutlined />
            </Button>

            <Button
              color="purple"
              variant="filled"
              title="Borrow Book"
              onClick={() => onBookBorrow(row)}
            >
              <SwapOutlined />
            </Button>
          </Space>
        );
      },
    },
  ];
};
