import { FC } from "react";
import useForm from "../hooks/useForm";
import { SortComponentProps } from "../types/types";
import Style from "../styles/components.module.css";

const SortComponent: FC<SortComponentProps> = ({ sortFunction }) => {
  const { values, handleChange } = useForm({ sort: "" });
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <select
          className={Style["sort-selector"]}
          name="sort"
          value={values.sort}
          onChange={(event) => handleChange(event)}
        >
          <option value="">select...</option>
          <option>name</option>
          <option>country</option>
          <option>city</option>
          <option>code</option>
        </select>
        <button
          className={Style["sort-btn"]}
          type="submit"
          onClick={sortFunction}
        >
          sort
        </button>
      </form>
    </div>
  );
};

export default SortComponent;
