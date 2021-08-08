import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { StudentData } from "../types/types";

const useTypingFilter = (
  data: StudentData[],
  clonedStateDispatcher: Dispatch<SetStateAction<StudentData[]>>
) => {
  return {
    typingFilterFunction: (event: ChangeEvent<HTMLInputElement>) => {
      let typed = event.target.value;
      let temp = [...data];

      if (typed.split("").length > 0) {
        let dataHelper = data.filter((data) =>
          typed.split("").some((char) => data.name.includes(char))
        );
        clonedStateDispatcher(() => dataHelper);
      } else {
        clonedStateDispatcher(temp);
      }
    },
  };
};

export default useTypingFilter;
