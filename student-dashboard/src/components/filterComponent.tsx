import { FC } from "react";
import useForm from "../hooks/useForm";
import { FilterComponentProps } from "../types/types";
import Style from "../styles/components.module.css";

const FilterComponent: FC<FilterComponentProps> = ({
  data,
  filterRef,
  typingFilterFunction,
  selectorFilterFunction,
  jointFilterFunction,
}) => {
  const { values, handleChange } = useForm({
    filterByName: "",
    filterByCountry: "",
    filterByCity: "",
    filterByStatus: "",
  });
  const Countries = new Set(data?.map((entry) => entry.country));
  let countries: string[] = [];
  Countries.forEach((country) => countries.push(country));

  const Cities = new Set(data?.map((entry) => entry.city));
  const cities: string[] = [];
  Cities.forEach((city) => cities.push(city));
  return (
    <form
      ref={filterRef}
      onSubmit={(e) => e.preventDefault()}
      className={Style["filter-component"]}
    >
      <input
        value={values.filterByName}
        name="filterByName"
        onChange={(event) => {
          handleChange(event);
          typingFilterFunction?.(event);
        }}
        type="text"
        placeholder="filter by name"
      />

      <select
        value={values.filterByCountry}
        onChange={(event) => {
          handleChange(event);
          selectorFilterFunction?.(event);
        }}
        name="filterByCountry"
      >
        <option value="">filter by country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <select
        value={values.filterByCity}
        onChange={(event) => {
          handleChange(event);
          selectorFilterFunction?.(event);
        }}
        name="filterByCity"
      >
        <option value="">filter by city</option>

        {cities.map((city, index) => (
          <option key={index}>{city}</option>
        ))}
      </select>
      <select
        value={values.filterByStatus}
        onChange={(event) => {
          handleChange(event);
          selectorFilterFunction?.(event);
        }}
        name="filterByStatus"
      >
        <option value="">filter by status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Progress</option>
      </select>
      <button type="submit" onClick={(event) => jointFilterFunction?.(event)}>
        Filter
      </button>
    </form>
  );
};

export default FilterComponent;
