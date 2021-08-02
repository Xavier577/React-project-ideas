import { useState } from "react";
import { capitaliseRoute } from "../utils/utils";
import useSessionStorage from "./useSessionStorage";

const useDynamicLabel = () => {
  const [pageLabel, setPageLabel] = useState<string>(
    JSON.parse(sessionStorage.getItem("pageLabel") as string) ??
      capitaliseRoute(window.location.pathname.split("/").join(""))
  );

  useSessionStorage("pageLabel", pageLabel);
  return {
    pageLabel,
    changePageLabel: (label: string) => {
      sessionStorage.removeItem("pageLabel");
      setPageLabel(label);
    },
  };
};

export default useDynamicLabel;
