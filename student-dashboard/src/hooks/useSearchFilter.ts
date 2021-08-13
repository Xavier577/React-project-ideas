import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { FieldParams, StudentData } from "../types/types";

const useSearchFilter = (
  data: StudentData[],
  clonedStateDispatcher: Dispatch<SetStateAction<StudentData[]>>
) => {
  return {
    searchFilter: (event: ChangeEvent<HTMLInputElement>) => {
      let fields = [
        "name",
        "status",
        "country",
        "city",
        "code",
      ] as FieldParams[];
      let dataHelper = data.filter((entry) =>
        fields.some((key) =>
          entry[key].toString().includes(event.target.value.toLowerCase())
        )
      );
      clonedStateDispatcher(() => dataHelper);
    },
  };
};

export default useSearchFilter;
