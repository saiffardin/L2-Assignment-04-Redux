import { IBook } from "@/redux/api/types/books.types";
import { EditOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookValidations, TBookFormData } from "@/validations/book-validations";

import { useUpdateBookMutation } from "@/redux/api/baseApi";

import toast from "react-hot-toast";
import BookForm from "@/components/BookForm";

interface Props {
  row: IBook;
}

const ActionEdit = ({ row }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [updateBook, { isLoading, isSuccess }] = useUpdateBookMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book Updated Successfully!");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const methods = useForm<TBookFormData>({
    resolver: yupResolver(bookValidations),
    defaultValues: {},

    values: {
      title: row?.title || "",
      author: row?.author || "",
      genre: row?.genre || "FANTASY",
      available: (row?.copies && row?.copies > 0) || false,
      copies: row?.copies || 0,
      isbn: row?.isbn || "",
      description: row?.description || "",
    },
  });

  const { handleSubmit, reset } = methods;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const onSubmit = async (data: IBook) => {
    try {
      await updateBook({ _id: row?._id, ...data }).unwrap();
    } catch (error) {
      console.log(error);
      toast.error("Book update failed.");
    }
  };

  return (
    <>
      <Button
        color="blue"
        variant="filled"
        title="Edit Book"
        onClick={showModal}
        disabled={isLoading}
      >
        <EditOutlined />
      </Button>

      <Modal
        title="Book Update"
        open={isModalOpen}
        okText="Submit"
        onOk={handleSubmit(onSubmit as SubmitHandler<unknown>)}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <FormProvider {...methods}>
          <BookForm />
        </FormProvider>
      </Modal>
    </>
  );
};

export default ActionEdit;
