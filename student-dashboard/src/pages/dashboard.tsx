import Style from "../styles/pages.module.css";
import StudentTable from "../components/studentTable";
import useStudentRecords, { StudentStore } from "../hooks/useStudentRecord";
import { studentData as templateData } from "../db.json";
import FilterSelectors from "../components/filterSelectors";
import { StudentData } from "../types/types";
import ActivityStats from "../components/activityStats";

const DashBoard = () => {
  const { data } = useStudentRecords("studentData");
  const cloneData = [...data]; //templateData as unknown as StudentData[];
  return (
    <main className={Style["dashboard-page"]}>
      <ActivityStats data={cloneData} />
      <FilterSelectors />
      <input type="text" name="search" list="data" placeholder="search" />
      <datalist itemID="data" id="data">
        {data.map((entry) => (
          <option value={entry.name} key={entry.code} />
        ))}
      </datalist>
      <StudentTable data={cloneData} />
    </main>
  );
};

export default DashBoard;
