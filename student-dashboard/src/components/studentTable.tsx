import { FC } from "react";
import Style from "../styles/components.module.css";
import { StudentData } from "../types/types";

const StudentTable: FC<{ data?: StudentData[] }> = ({ data }) => {
  return (
    <div className={Style["student-table-container"]}>
      {data?.length ? (
        <table className={Style["student-table"]}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Status</th>
              <th>Country</th>
              <th>City</th>
              <th>Code</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student?.name}</td>
                <td>{student?.status}</td>
                <td>{student?.country}</td>
                <td>{student?.city}</td>
                <td>{student?.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "No student currently in record..."
      )}
    </div>
  );
};

export default StudentTable;
