import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { StudentData } from "../types/types";

const useSearchFilter = (
  data: StudentData[],
  clonedStateDispatcher: Dispatch<SetStateAction<StudentData[]>>
) => {
  return {
    searchFilter: (event: ChangeEvent<HTMLInputElement>) => {
      let dataHelper = data.filter((entry) =>
        entry.name.includes(event.target.value.toLowerCase())
      );
      clonedStateDispatcher(() => dataHelper);
    },
  };
};

export default useSearchFilter;
