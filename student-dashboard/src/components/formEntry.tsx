import { FC, FormEvent, Fragment } from "react";
import useForm from "../hooks/useForm";
import { FormEntryProps } from "../types/types";


const FormEntry: FC<FormEntryProps> = ({
  formReference,
  formDataHandler,
  editMode,
  className,
}) => {
  const { values, handleChange } = useForm({
    name: "",
    status: "",
    city: "",
    country: "",
    code: "",
  });
  return (
    <Fragment>
      <form
        className={className}
        ref={formReference}
        onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <select
          value={values.status}
          onChange={handleChange}
          name="status"
          id="status"
          required
        >
          <option disabled value="">
            status of Students
          </option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Progress</option>
        </select>
        <input
          type="text"
          name="country"
          placeholder="country"
          value={values.country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="city"
          value={values.city}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="code"
          placeholder="code"
          value={values.code}
          onChange={handleChange}
          required
        />
        <button onClick={() => formDataHandler?.(formReference?.current)}>
          Add Student
        </button>
      </form>
    </Fragment>
  );
};

export default FormEntry;
