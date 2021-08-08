import { RefObject } from "react";

export interface FormEntryProps {
  formReference?: RefObject<HTMLFormElement>;
  formDataHandler?: Function;
  editMode?: boolean;
}

export interface FormValueTypes {
  [value: string]: string;
}

export interface StudentData {
  name: string;
  status: string;
  city: string;
  country: string;
  code: number;
}

export interface FilterComponentProp {
  data?: StudentData[];
  filterRef?: RefObject<HTMLFormElement>;
  typingFilterFunction?: Function;
  selectorFilterFunction?: Function;
}

export type FieldParams = "name" | "status" | "city" | "country" | "code";

export type FormFields =
  | HTMLButtonElement
  | HTMLSelectElement
  | HTMLInputElement
  | HTMLTextAreaElement;

export interface FilterType {
  filterByName: string;
  filterByCountry: string;
  filterByCity: string;
  filterByStatus: "active" | "inactive" | "progress";
}

export interface StudentTableComponent {
  props: {
    data?: StudentData[];
  };
  state: {
    currentPage: number;
    studentsPerPage: number;
    isCurrent?: boolean;
  };
}
