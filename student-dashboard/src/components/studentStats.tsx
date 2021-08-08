import { FC } from "react";
import { StudentData } from "../types/types";
import Style from "../styles/components.module.css";

const StudentStats: FC<{ data?: StudentData[] }> = ({ data }) => {
  const Total = data?.length || 0;
  const Countries = new Set(data?.map((entry) => entry.country));
  const Cities = new Set(data?.map((entry) => entry.city));
  const Active = data?.filter((entry) => entry.status === "active").length || 0;
  const Inactive =
    data?.filter((entry) => entry.status === "inactive").length || 0;
  const Progress =
    data?.filter((entry) => entry.status === "progress").length || 0;

  return (
    <div className={Style["activity-stats-container"]}>
      <span className={Style["total-students"]}>
        Total Students
        <span className={Style["total-students-figure"]}>{Total}</span>
      </span>
      <span className={Style["total-countries"]}>
        Countries: {Countries.size}
        <br />
        Cities: {Cities.size}
      </span>
      <span className={Style["activity-stats"]}>
        Active: {Active} <br />
        Inactive: {Inactive} <br />
        Progress: {Progress}
      </span>
    </div>
  );
};

export default StudentStats;
