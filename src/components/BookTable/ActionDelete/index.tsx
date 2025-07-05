import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { IBook } from "@/redux/api/types/books.types";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { type ConfigUpdate } from "antd/es/modal/confirm";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface Props {
  row: IBook;
}

const ActionDelete = ({ row }: Props) => {
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book Deleted Successfully!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const handleDelete = async (modal: {
    destroy: () => void;
    update: (configUpdate: ConfigUpdate) => void;
  }) => {
    modal.update({
      okButtonProps: { loading: true, disabled: true },
    });
    await deleteBook(row).unwrap();
  };

  const handleConfirmDelete = () => {
    const modal = Modal.confirm({
      title: "Confirm Deletion",
      content: (
        <p>
          Are you sure you want to{" "}
          <span className="text-red-500 font-bold">delete</span> the book ?
        </p>
      ),
      okText: "Yes, Delete",
      okType: "danger",

      onOk: async () => await handleDelete(modal),

      okButtonProps: {
        loading: false,
        disabled: false,
      },

      footer: (_, { OkBtn, CancelBtn }) => (
        <>
          <CancelBtn />

          <OkBtn />
        </>
      ),
    });
  };

  return (
    <>
      <Button
        color="danger"
        variant="filled"
        title="Delete Book"
        onClick={handleConfirmDelete}
      >
        <DeleteOutlined />
      </Button>
    </>
  );
};

export default ActionDelete;
