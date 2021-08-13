import SearchBar from "../components/searchBar";
import StudentTable from "../components/studentTable";
import useSearchFilter from "../hooks/useSearchFilter";
import useStudentRecords from "../hooks/useStudentRecord";
import useTableData from "../hooks/useTableData";
import Style from "../styles/pages.module.css";

const AdminPage = () => {
  const { data } = useStudentRecords("studentData");
  const {tableData, setTableData} = useTableData()
  const { searchFilter } = useSearchFilter(data, setTableData);

 
  return (
    <main className={Style["admin-page"]}>
      <h1>Student Management</h1>
      <SearchBar data={tableData} searchFilter={searchFilter} />
      <StudentTable data={data} editable />
    </main>
  );
};

export default AdminPage;
