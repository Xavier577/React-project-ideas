import { FC } from "react";
import useForm from "../hooks/useForm";
import { SearchBarProps } from "../types/types";
import Style from "../styles/components.module.css";

const SearchBar: FC<SearchBarProps> = ({ data, searchFilter }) => {
  const { values, handleChange } = useForm({ search: "" });
  return (
    <div className={Style["search-bar-container"]}>
      <input
        className={Style["search-bar"]}
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
      <datalist
        className={Style["search-bar-suggestions"]}
        itemID="data"
        id="data"
      >
        {data?.map((entry, index) => (
          <option value={entry.name} key={index} />
        ))}
      </datalist>
    </div>
  );
};

export default SearchBar;
