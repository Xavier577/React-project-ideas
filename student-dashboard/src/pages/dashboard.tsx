import StudentTable from "../components/studentTable";
import useStudentRecords from "../hooks/useStudentRecord";
import FilterComponent from "../components/filterComponent";
import StudentStats from "../components/studentStats";
import { useRef } from "react";
import useTypingFilter from "../hooks/useTypingFilter";
import useSelectorFilter from "../hooks/useSelectorFilter";
import useJointFilter from "../hooks/useJointFilter";
import SearchBar from "../components/searchBar";
import useSearchFilter from "../hooks/useSearchFilter";
import Style from "../styles/pages.module.css";
import SortComponent from "../components/sortComponent";
import useSortFilter from "../hooks/useSortFilter";
import useTableData from "../hooks/useTableData";

const DashBoard = () => {
  const { data } = useStudentRecords("studentData");
  const {tableData, setTableData} = useTableData()
  const { typingFilterFunction } = useTypingFilter(data, setTableData);
  const { selectorFilterFunction } = useSelectorFilter(data, setTableData);
  const { searchFilter } = useSearchFilter(data, setTableData);
  const { jointFilterFunction } = useJointFilter(data, setTableData);
  const { sortFunction } = useSortFilter(data, setTableData);
  const filterRef = useRef<HTMLFormElement>(null);

  return (
    <main className={Style["dashboard-page"]}>
      <StudentStats data={tableData} />
      <FilterComponent
        data={data}
        filterRef={filterRef}
        typingFilterFunction={typingFilterFunction}
        selectorFilterFunction={selectorFilterFunction}
        jointFilterFunction={jointFilterFunction}
      />
      <div className={Style["search-sort-container"]}>
        <SearchBar data={tableData} searchFilter={searchFilter} />
        <SortComponent data={tableData} sortFunction={sortFunction} />
      </div>
      <StudentTable data={tableData}  />
    </main>
  );
};

export default DashBoard;
