import { IBook } from "@/redux/api/types/books.types";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface Props {
  row: IBook;
}

const ActionEdit = ({ row }: Props) => {
  const handleEditBook = () => {
    console.log("================ Action EDIT");
    console.log(row);
  };

  return (
    <>
      <Button
        color="blue"
        variant="filled"
        title="Edit Book"
        onClick={handleEditBook}
      >
        <EditOutlined />
      </Button>
    </>
  );
};

export default ActionEdit;
