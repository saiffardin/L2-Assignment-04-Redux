import * as yup from "yup";

export const borrowValidations = yup.object({
  quantity: yup
    .number()
    .required("Quantity is required")
    .min(1, "Must borrow at least 1 copy")
    .integer("Must be a whole number"),
  dueDate: yup
    .date()
    .required("Due date is required")
    .min(new Date(), "Due date must be in the future"),
});

export type TBorrowFormData = yup.InferType<typeof borrowValidations>;
