import { FC, useState, useRef, MouseEventHandler, useEffect } from "react";
import useStudentRecords, { StudentStore } from "../hooks/useStudentRecord";
import { StudentData } from "../types/types";
import { retrieveFormData } from "../utils/utils";
import FormEntry from "./formEntry";
import Style from "../styles/components.module.css";
import useTableData from "../hooks/useTableData";
const AddStudentPopUP: FC<{
  removeFunction?: MouseEventHandler;
}> = ({ removeFunction }) => {
  const [entry, setEntry] = useState<StudentData>();
  const { data, controller } = useStudentRecords("studentData", entry);
  const formRef = useRef<HTMLFormElement>(null);


  function formDataHandler(
    formElement: NodeListOf<HTMLInputElement | HTMLButtonElement>
  ) {
    let dataEntryFromInput = retrieveFormData(formElement) as StudentData
    setEntry(dataEntryFromInput);
    
  }

  return (
    <div className={Style["add-student-prompt"]}>
      <div className={Style["popup-box-container"]}>
      
          <span
            onClick={removeFunction}
            className={Style["remove-add-prompt-button"]}
          >
            &times;
          </span>
          <FormEntry
            className={Style["add-student-form"]}
            formReference={formRef}
            formDataHandler={formDataHandler}
          />
      
      </div>
    </div>
  );
};

export default AddStudentPopUP;
