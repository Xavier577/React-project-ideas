import { Dispatch, MouseEvent, SetStateAction } from "react";
import {
  FilterParams,
  FilterFields,
  FormFields,
  StudentData,
} from "../types/types";
import { retrieveFormData } from "../utils/utils";

const useJointFilter = (
  data: StudentData[],
  clonedStateDispatcher: Dispatch<SetStateAction<StudentData[]>>
) => {
  return {
    jointFilterFunction: (event: MouseEvent<HTMLButtonElement>) => {
      let inputNodes = event.currentTarget.parentNode?.childNodes;
      let filterCaterias = retrieveFormData(
        inputNodes as NodeListOf<FormFields>
      ) as FilterFields;
      let filterFields = Object.keys(filterCaterias) as FilterParams[];
      if (Object.values(filterCaterias).length < 1) return;
      else {
        let dataHelper = data.filter((entry) =>
          filterFields.every((key) => {
            if (filterCaterias[key] === "") return true;
            if (key === "filterByName") {
              return filterCaterias[key]
                .split("")
                .some((char) => entry.name.includes(char));
            }
            if (Object.values(entry).includes(filterCaterias[key])) {
              return true;
            }
            return false;
          })
        );
        clonedStateDispatcher(() => dataHelper);
      }
    },
  };
};

export default useJointFilter;
