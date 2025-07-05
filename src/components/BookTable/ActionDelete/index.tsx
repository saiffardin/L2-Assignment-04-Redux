import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { IBook } from "@/redux/api/types/books.types";

interface Props {
  row: IBook;
}

const ActionDelete = ({ row }: Props) => {
  const handleDeleteBook = () => {
    console.log("================ acc delete");
    console.log(row);
  };

  return (
    <>
      <Button
        color="danger"
        variant="filled"
        title="Delete Book"
        onClick={handleDeleteBook}
      >
        <DeleteOutlined />
      </Button>
    </>
  );
};

export default ActionDelete;
