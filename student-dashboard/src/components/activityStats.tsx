import { FC } from "react";
import { StudentData } from "../types/types";
import Style from "../styles/components.module.css";

const ActivityStats: FC<{ data?: StudentData[] }> = ({ data }) => {
  const Total = data?.length || 0;
  const Active = data?.filter((entry) => entry.status === "active").length || 0;
  const Inactive =
    data?.filter((entry) => entry.status === "inactive").length || 0;
  return (
    <div className={Style["activity-stats"]}>
      <span className={Style["total"]}>total: {Total}</span>
      <span className={Style["active"]}>active: {Active}</span>
      <span className={Style["inactive"]}>inactive: {Inactive}</span>
    </div>
  );
};

export default ActivityStats;
