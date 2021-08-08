import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { StudentData } from "../types/types";

const useSelectorFilter = (
  data: StudentData[],
  clonedStateDispatcher: Dispatch<SetStateAction<StudentData[]>>
) => {
  return {
    selectorFilterFunction: (event: ChangeEvent<HTMLSelectElement>) => {
      let dataHelper = data.filter((student) => {
        if (
          event.target.value.toLowerCase() === "all" ||
          event.target.value.toLowerCase() === ""
        )
          return true;
        else {
          return Object.values(student).includes(
            event.target.value.toLowerCase()
          );
        }
      });
      clonedStateDispatcher(() => dataHelper);
    },
  };
};

export default useSelectorFilter;
