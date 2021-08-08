import { ChangeEvent, useState } from "react";
import { FormFields } from "../types/types";

export default function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);
  return {
    values,
    handleChange: (e: ChangeEvent<FormFields>) => {
      setValues((currentValues) => ({
        ...currentValues,
        [e.target.name]: e.target.value,
      }));
    },
  };
}
