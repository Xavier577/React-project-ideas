import { MouseEvent, Dispatch, SetStateAction } from "react";
import { FieldParams, FormFields, StudentData } from "../types/types";

const useSortFilter = (
  data: StudentData[],
  clonedStateDispatcher: Dispatch<SetStateAction<StudentData[]>>
) => {
  return {
    sortFunction: (event: MouseEvent<FormFields>) => {
      let sortComponentContainer = event.currentTarget
        .parentNode as unknown as NodeListOf<FormFields>;
      let subSortComponents = Array.from(sortComponentContainer);
      let sortSelector = subSortComponents.find(
        (node) => node.tagName === "SELECT"
      );
      let fieldToSortBy = sortSelector?.value as FieldParams;
      let dataHelper =
        (fieldToSortBy as string) === ""
          ? [...data]
          : [...data].sort((a, b) =>
              b[fieldToSortBy] < a[fieldToSortBy] ? 1 : -1
            );
      clonedStateDispatcher(() => dataHelper);
    },
  };
};

export default useSortFilter;
