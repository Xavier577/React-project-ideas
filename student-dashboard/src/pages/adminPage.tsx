import { useRef, useState } from "react";
import FormEntry from "../components/formEntry";
import StudentTable from "../components/studentTable";
import useStudentRecords from "../hooks/useStudentRecord";
import Style from "../styles/pages.module.css";
import { StudentData } from "../types/types";
import { retrieveFormData } from "../utils/utils";

const AdminPage = () => {
  const [show, setShow] = useState(false);
  const [entry, setEntry] = useState<StudentData>();
  const { data, controller } = useStudentRecords("studentData", entry);
  const formRef = useRef<HTMLFormElement>(null);
  const formRemoverRef = useRef<HTMLFormElement>(null);
  function formDataHandler(
    formElement: NodeListOf<HTMLInputElement | HTMLButtonElement>
  ) {
    setEntry(retrieveFormData(formElement) as StudentData);
  }
  function removeFromRecord(
    formElement: NodeListOf<HTMLInputElement | HTMLButtonElement>
  ) {
    let dataEntry = retrieveFormData(formElement);

    controller.remove(dataEntry);
  }

  return (
    <main className={Style["admin-page"]}>
      <h1>Student Management</h1>
      <FormEntry formReference={formRef} formDataHandler={formDataHandler} />
      <pre>{JSON.stringify(data)}</pre>
      <button onClick={() => setShow((current) => !current)}>Remove</button>
      {show ? (
        <>
          <FormEntry
            formDataHandler={removeFromRecord}
            formReference={formRemoverRef}
          />
        </>
      ) : null}
      <StudentTable data={data} />
    </main>
  );
};

export default AdminPage;
