import { MouseEventHandler, RefObject } from "react";

export interface FormEntryProps {
  formReference?: RefObject<HTMLFormElement>;
  formDataHandler?: Function;
  editMode?: boolean;
  className?: string;
}

export interface FormValueTypes {
  [value: string]: string;
}

export interface FilterComponentProps {
  data?: StudentData[];
  filterRef?: RefObject<HTMLFormElement>;
  typingFilterFunction?: Function;
  selectorFilterFunction?: Function;
  jointFilterFunction?: Function;
}

export type FieldParams = "name" | "status" | "city" | "country" | "code";

export type FormFields =
  | HTMLButtonElement
  | HTMLSelectElement
  | HTMLInputElement
  | HTMLTextAreaElement;

export interface FilterFields {
  filterByName: string;
  filterByCountry: string;
  filterByCity: string;
  filterByStatus: "active" | "inactive" | "progress";
}

export type FilterParams =
  | "filterByName"
  | "filterByCountry"
  | "filterByCity"
  | "filterByStatus";

export interface SearchBarProps {
  data?: StudentData[];
  searchFilter?: Function;
}

export interface SortComponentProps {
  data?: StudentData[];
  sortFunction?: MouseEventHandler<FormFields>;
}

export interface StudentTableComponent {
  props: {
    data?: StudentData[];
    editable?: boolean;
  };
  state: {
    currentPage: number;
    studentsPerPage: number;
    isAddClicked?: boolean;
    record: StudentData[];
    tableData?: StudentData[];
  };
}

export interface StudentData {
  name: string;
  status: string;
  city: string;
  country: string;
  code: number;
}
