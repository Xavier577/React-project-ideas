import { useRef, useState } from "react";
import FormEntry from "../components/formEntry";
import useStudentRecords from "../hooks/useStudentRecord";
import Style from "../styles/pages.module.css";
import { FieldParams, StudentData } from "../types/types";

function retrieveFormData(
  formElement: NodeListOf<HTMLInputElement | HTMLButtonElement>
) {
  let dataEntry: any = {};
  Array.from(formElement).forEach((element) => {
    if (element.name as FieldParams) {
      dataEntry[element.name] = element.value;
    }
  });

  return dataEntry as StudentData;
}

const AdminPage = () => {
  const [show, setShow] = useState(false);
  const [entry, setEntry] = useState<StudentData>();
  const { data, controller } = useStudentRecords("studentData", entry);
  const formRef = useRef<HTMLFormElement>(null);
  const formRemoverRef = useRef<HTMLFormElement>(null);
  function formDataHandler(
    formElement: NodeListOf<HTMLInputElement | HTMLButtonElement>
  ) {
    setEntry(retrieveFormData(formElement));
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
      <button onClick={() => setShow((current) => !current)}>Remove</button>
      {show ? (
        <>
          <FormEntry
            formDataHandler={removeFromRecord}
            formReference={formRemoverRef}
          />
        </>
      ) : null}
      <FormEntry formReference={formRef} formDataHandler={formDataHandler} />
      <pre>{JSON.stringify(data)}</pre>
    </main>
  );
};

export default AdminPage;
