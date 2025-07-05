import { Button } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { IBook } from "@/redux/api/types/books.types";

interface Props {
  row: IBook;
}
const ActionBorrow = ({ row }: Props) => {
  const handleBorrowBook = () => {
    console.log("================ Borrow");
    console.log(row);
  };

  return (
    <>
      <Button
        color="purple"
        variant="filled"
        title="Borrow Book"
        onClick={handleBorrowBook}
      >
        <SwapOutlined />
      </Button>
    </>
  );
};

export default ActionBorrow;
