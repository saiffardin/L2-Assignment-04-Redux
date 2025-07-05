import { type ReactNode } from "react";
import {
  DatePicker,
  Form,
  Input,
  InputNumber,
  InputProps,
  Select,
  Switch,
} from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { FormDataKeys, TypeValidateStatus } from "./types";

interface Props {
  registerName: FormDataKeys;
  label: string;
  validateStatus?: TypeValidateStatus;
  help?: ReactNode;
  placeholder?: string;
  type: "text" | "number" | "switch" | "textarea" | "select" | "date";
  required?: boolean;
  options?: string[];
  minNumber?: number;
  maxNumber?: number;
}

const FormInput = (props: Props) => {
  const { control } = useFormContext();

  const {
    label,
    registerName,
    type,
    options = [],
    placeholder = "Enter Here",
    required = false,
    validateStatus,
    help,
    minNumber,
    maxNumber,
  } = props;

  return (
    <Form.Item
      label={<span className="font-semibold">{label}</span>}
      validateStatus={validateStatus}
      help={help}
      required={required}
    >
      <Controller
        name={registerName}
        control={control}
        render={({ field }) => {
          switch (type) {
            case "text":
              return (
                <Input {...(field as InputProps)} placeholder={placeholder} />
              );

            case "number":
              return (
                <InputNumber
                  {...field}
                  min={minNumber || 0}
                  max={maxNumber}
                  placeholder={placeholder}
                  className="w-full"
                />
              );

            case "switch":
              return <Switch {...field} checked={field.value} />;

            case "textarea":
              return (
                <Input.TextArea {...field} rows={3} placeholder={placeholder} />
              );

            case "select":
              return (
                <Select
                  {...field}
                  options={options.map((g) => ({ value: g, label: g }))}
                  placeholder={placeholder}
                  className="w-full"
                />
              );

            case "date":
              return (
                <DatePicker
                  {...field}
                  onChange={(date) => field.onChange(date)}
                  className="w-full"
                />
              );

            default:
              return (
                <Input {...(field as InputProps)} placeholder={placeholder} />
              );
          }
        }}
      />
    </Form.Item>
  );
};

export default FormInput;
