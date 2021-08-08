import Style from "../styles/pages.module.css";
import StudentTable from "../components/studentTable";
import useStudentRecords from "../hooks/useStudentRecord";
import FilterComponent from "../components/filterComponent";
import StudentStats from "../components/studentStats";
import { useRef, useState } from "react";
import useTypingFilter from "../hooks/useTypingFilter";
import useSelectorFilter from "../hooks/useSelectorFilter";
import SearchBar from "../components/searchBar";
import useSearchFilter from "../hooks/useSearchFilter";

const DashBoard = () => {
  const { data } = useStudentRecords("studentData");

  const [cloneData, setCloneData] = useState(data);
  const { typingFilterFunction } = useTypingFilter(data, setCloneData);
  const { selectorFilterFunction } = useSelectorFilter(data, setCloneData);
  const { searchFilter } = useSearchFilter(data, setCloneData);
  const filterRef = useRef<HTMLFormElement>(null);

  return (
    <main className={Style["dashboard-page"]}>
      <StudentStats data={cloneData} />
      <FilterComponent
        data={data}
        filterRef={filterRef}
        typingFilterFunction={typingFilterFunction}
        selectorFilterFunction={selectorFilterFunction}
      />
      <SearchBar data={cloneData} searchFilter={searchFilter} />
      <StudentTable data={cloneData} />
    </main>
  );
};

export default DashBoard;
