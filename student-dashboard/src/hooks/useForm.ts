import { ChangeEvent, useState } from "react";
import { FormValueTypes } from "../types/types";

export default function useForm(initialValues: FormValueTypes) {
  const [values, setValues] = useState(initialValues);
  return {
    values,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [e.target.name]: e.target.value,
      }));
    },
  };
}
