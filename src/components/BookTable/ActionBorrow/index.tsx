import { Button, Form, Modal } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { IBook } from "@/redux/api/types/books.types";
import { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  borrowValidations,
  TBorrowFormData,
} from "@/validations/borrow-validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { IBorrowBook } from "@/redux/api/types/borrow.types";
import FormInput from "@/components/FormInput";
import { useCreateBorrowBookMutation } from "@/redux/api/baseApi";
import { useNavigate } from "react-router";
import { PATHS } from "@/constants/paths";
import toast from "react-hot-toast";

interface Props {
  row: IBook;
}
const ActionBorrow = ({ row }: Props) => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBorrow, { isLoading, isSuccess }] =
    useCreateBorrowBookMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Book Borrowed Successfully!", { duration: 5000 });
      navigate(PATHS.BORROWED_BOOK_SUMMARY);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const methods = useForm<TBorrowFormData>({
    resolver: yupResolver(borrowValidations),
    defaultValues: {},
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

  const onSubmit = async (data: IBorrowBook) => {
    if (row?._id && data?.dueDate && data.quantity) {
      try {
        await createBorrow({
          book: row?._id,
          dueDate: new Date(data?.dueDate).toISOString(),
          quantity: data.quantity,
        }).unwrap();
      } catch (error) {
        console.log(error);
        toast.error("New borrowed book creation failed.");
      }
    }
  };

  return (
    <>
      <Button
        color="purple"
        variant="filled"
        title="Borrow Book"
        onClick={showModal}
        disabled={isLoading}
      >
        <SwapOutlined />
      </Button>

      <Modal
        title={
          <p>
            Borrow Book{" "}
            <span className="text-red-600">(Copies left: {row?.copies})</span>
          </p>
        }
        open={isModalOpen}
        okText="Submit"
        onOk={handleSubmit(onSubmit as SubmitHandler<unknown>)}
        onCancel={handleCancel}
        confirmLoading={isLoading}
      >
        <FormProvider {...methods}>
          <Form layout="vertical">
            <FormInput
              label="Quantity"
              registerName="quantity"
              type="number"
              placeholder="Enter quantity"
              required
              validateStatus={errors.quantity ? "error" : ""}
              help={errors.quantity?.message as string}
            />

            <FormInput
              label="Due Date"
              registerName="dueDate"
              type="date"
              placeholder="Enter Date"
              required
              validateStatus={errors.dueDate ? "error" : ""}
              help={errors.dueDate?.message as string}
            />
          </Form>
        </FormProvider>
      </Modal>
    </>
  );
};

export default ActionBorrow;
