import Style from "../styles/components.module.css";

const FilterSelectors = () => {
  return (
    <div className={Style["filter-component"]}>
      <div>
        Filter by name:{" "}
        <select name="filter-by-name">
          <option value="name">Ascending</option>
          <option value="country">Descending</option>
        </select>
      </div>
      <div>
        Filter by country:
        <select name="filter-by-country">
          <option value="name">Ascending</option>
          <option value="country">Descending</option>
        </select>
      </div>
      <div>
        Filter by country:
        <select name="filter-by-country">
          <option value="name">Ascending</option>
          <option value="country">Descending</option>
        </select>
      </div>
      <div>
        Filter by country:
        <select name="filter-by-country">
          <option value="name">Ascending</option>
          <option value="country">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSelectors;
