import StudentTable from "../components/studentTable";
import useStudentRecords from "../hooks/useStudentRecord";
import FilterComponent from "../components/filterComponent";
import StudentStats from "../components/studentStats";
import { useRef, useState } from "react";
import useTypingFilter from "../hooks/useTypingFilter";
import useSelectorFilter from "../hooks/useSelectorFilter";
import useJointFilter from "../hooks/useJointFilter";
import SearchBar from "../components/searchBar";
import useSearchFilter from "../hooks/useSearchFilter";
import Style from "../styles/pages.module.css";
import SortComponent from "../components/sortComponent";
import useSortFilter from "../hooks/useSortFilter";

const DashBoard = () => {
  const { data } = useStudentRecords("studentData");
  const [cloneData, setCloneData] = useState(data);
  const { typingFilterFunction } = useTypingFilter(data, setCloneData);
  const { selectorFilterFunction } = useSelectorFilter(data, setCloneData);
  const { searchFilter } = useSearchFilter(data, setCloneData);
  const { jointFilterFunction } = useJointFilter(data, setCloneData);
  const { sortFunction } = useSortFilter(data, setCloneData);
  const filterRef = useRef<HTMLFormElement>(null);

  return (
    <main className={Style["dashboard-page"]}>
      <StudentStats data={cloneData} />
      <FilterComponent
        data={data}
        filterRef={filterRef}
        typingFilterFunction={typingFilterFunction}
        selectorFilterFunction={selectorFilterFunction}
        jointFilterFunction={jointFilterFunction}
      />
      <SearchBar data={cloneData} searchFilter={searchFilter} />
      <SortComponent data={cloneData} sortFunction={sortFunction} />
      <StudentTable data={cloneData} />
    </main>
  );
};

export default DashBoard;
