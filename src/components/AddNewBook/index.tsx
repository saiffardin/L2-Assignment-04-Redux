import { Button, Modal } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { bookValidations, TBookFormData } from "@/validations/book-validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { IBook } from "@/redux/api/types/books.types";
import toast from "react-hot-toast";
import BookForm from "../BookForm";
import { useCreateBookMutation } from "@/redux/api/baseApi";

const AddNewBook = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBook, { isLoading }] = useCreateBookMutation();

  const methods = useForm<TBookFormData>({
    resolver: yupResolver(bookValidations),
    defaultValues: {},
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
    console.log("submit create book:", data);

    if (data.copies === 0) {
      console.log("====== 0 copies");
      toast.error("Copies can't be 0.");

      return;
    }

    try {
      await createBook(data).unwrap();
    } catch (error) {
      console.log(error);
      toast.error("New book creation failed.");
    }
  };

  return (
    <>
      <Button
        type="primary"
        variant="outlined"
        onClick={showModal}
        disabled={isLoading}
      >
        <PlusCircleOutlined style={{ fontSize: 20 }} /> Add New Book
      </Button>

      <Modal
        title="Create New Book"
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

export default AddNewBook;
