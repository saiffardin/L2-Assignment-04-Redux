import { IBook } from "@/redux/api/types/books.types";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Modal } from "antd";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookValidations, TBookFormData } from "@/validations/book-validations";
import FormInput from "@/components/FormInput";
import { BOOK_GENRE } from "@/constants/book-genre";

interface Props {
  row: IBook;
}

const ActionEdit = ({ row }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const methods = useForm<TBookFormData>({
    resolver: yupResolver(bookValidations),
    defaultValues: row,
  });

  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const onSubmit = async (data: IBook) => {
    console.log("================");
    console.log("on edit row:", row);
    console.log("on edit submit:", data);
  };

  return (
    <>
      <Button
        color="blue"
        variant="filled"
        title="Edit Book"
        onClick={showModal}
      >
        <EditOutlined />
      </Button>

      <Modal
        title="Book Edit Modal"
        open={isModalOpen}
        onOk={handleSubmit(onSubmit as SubmitHandler<unknown>)}
        onCancel={handleCancel}
      >
        <FormProvider {...methods}>
          <Form layout="vertical" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
              <FormInput
                label="Title"
                registerName="title"
                type="text"
                placeholder="Enter book title"
                required
                validateStatus={errors.title ? "error" : ""}
                help={errors.title?.message}
              />

              <FormInput
                label="Author"
                registerName="author"
                type="text"
                placeholder="Enter author name"
                required
                validateStatus={errors.author ? "error" : ""}
                help={errors.author?.message}
              />

              <FormInput
                label="Genre"
                registerName="genre"
                type="select"
                options={[...BOOK_GENRE]}
                required
                placeholder="Select one genre"
                validateStatus={errors.genre ? "error" : ""}
                help={errors.genre?.message}
              />

              <FormInput
                label="ISBN"
                registerName="isbn"
                type="text"
                placeholder="Enter ISBN"
                required
                validateStatus={errors.isbn ? "error" : ""}
                help={errors.isbn?.message}
              />

              <FormInput
                label="Copies"
                registerName="copies"
                type="number"
                placeholder="Enter number of copies"
                required
                validateStatus={errors.copies ? "error" : ""}
                help={errors.copies?.message}
              />

              <FormInput
                label="Available"
                registerName="available"
                type="switch"
              />
            </div>

            <FormInput
              label="Description"
              registerName="description"
              type="textarea"
              placeholder="Enter book description"
            />
          </Form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default ActionEdit;
