import { Form } from "antd";
import FormInput from "@/components/FormInput";
import { BOOK_GENRE } from "@/constants/book-genre";
import { useFormContext } from "react-hook-form";

const BookForm = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <Form layout="vertical" className="mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <FormInput
          label="Title"
          registerName="title"
          type="text"
          placeholder="Enter book title"
          required
          validateStatus={errors.title ? "error" : ""}
          help={errors.title?.message as string}
        />

        <FormInput
          label="Author"
          registerName="author"
          type="text"
          placeholder="Enter author name"
          required
          validateStatus={errors.author ? "error" : ""}
          help={errors.author?.message as string}
        />

        <FormInput
          label="Genre"
          registerName="genre"
          type="select"
          options={[...BOOK_GENRE]}
          required
          placeholder="Select one genre"
          validateStatus={errors.genre ? "error" : ""}
          help={errors.genre?.message as string}
        />

        <FormInput
          label="ISBN"
          registerName="isbn"
          type="text"
          placeholder="Enter ISBN"
          required
          validateStatus={errors.isbn ? "error" : ""}
          help={errors.isbn?.message as string}
        />

        <FormInput
          label="Copies"
          registerName="copies"
          type="number"
          placeholder="Enter number of copies"
          required
          validateStatus={errors.copies ? "error" : ""}
          help={errors.copies?.message as string}
        />

        <FormInput label="Available" registerName="available" type="switch" />
      </div>

      <FormInput
        label="Description"
        registerName="description"
        type="textarea"
        placeholder="Enter book description"
      />
    </Form>
  );
};

export default BookForm;
