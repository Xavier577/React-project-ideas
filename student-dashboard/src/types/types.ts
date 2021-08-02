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

export type FieldParams = "name" | "status" | "city" | "country" | "code";
