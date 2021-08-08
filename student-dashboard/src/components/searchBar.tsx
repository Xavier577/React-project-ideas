import { FC } from "react";
import useForm from "../hooks/useForm";
import { StudentData } from "../types/types";
const SearchBar: FC<{ data?: StudentData[]; searchFilter?: Function }> = ({
  data,
  searchFilter,
}) => {
  const { values, handleChange } = useForm({
    search: "",
  });
  return (
    <div>
      <input
        type="text"
        value={values.search}
        onChange={(event) => {
          handleChange(event);
          searchFilter?.(event);
        }}
        name="search"
        list="data"
        placeholder="search"
      />
      <datalist itemID="data" id="data">
        {data?.map((entry, index) => (
          <option value={entry.name} key={index} />
        ))}
      </datalist>
    </div>
  );
};

export default SearchBar;
