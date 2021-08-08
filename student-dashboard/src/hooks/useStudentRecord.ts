import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldParams, StudentData } from "../types/types";

export default function useStudentRecords(
  key: string,
  value?: StudentData | undefined
) {
  const studentData = new StudentStore(
    key,
    useState<StudentData[]>(
      JSON.parse(localStorage.getItem(key) as string) ?? []
    )
  );

  useEffect(
    () => {
      if (value) {
        let fields = [...Object.keys(value)] as FieldParams[];
        let containsEmptyField = fields.some(
          (field) =>
            value[field] === null ||
            value[field] === undefined ||
            value[field] === ""
        );
        if (!containsEmptyField) studentData.add(value);
      }
    }, //eslint-disable-next-line
    [value]
  );

  return { data: studentData.store, controller: studentData };
}

export class StudentStore {
  store: StudentData[];
  helperStore: StudentData[];
  setStore: Dispatch<SetStateAction<StudentData[]>>;
  key: string;
  constructor(
    key: string,
    [state, setState]: [StudentData[], Dispatch<SetStateAction<StudentData[]>>]
  ) {
    this.store = state;
    this.helperStore = [...this.store];
    this.setStore = setState;
    this.key = key;
    this.saveToLocalStorage();
  }

  public values() {
    return [...this.store];
  }

  public add(value: StudentData) {
    let valueIdx = this.indexOf(value);
    if (valueIdx < 0) {
      this.helperStore.push(value);
      this.setStore(() => this.helperStore);
      this.saveToLocalStorage();
    }
  }
  public remove(value: StudentData) {
    let valueIdx = this.indexOf(value);
    if (valueIdx > -1) {
      this.helperStore.splice(valueIdx, 1);
      this.setStore(() => this.helperStore);
      this.saveToLocalStorage();
    }
  }
  public indexOf(value: StudentData) {
    let valueIdx = this.store.findIndex((entry) => entry.code === value.code);
    return valueIdx;
  }
  public saveToLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.store));
  }
}
