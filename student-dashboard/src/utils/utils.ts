import { FieldParams, FormFields } from "../types/types";

export const capitaliseRoute = (route: string) => {
  let char = route.split("");
  return char.length < 1 ? "Home" : capitalise(route);
};

export const capitalise = (str: string) => {
  let char = str.split("");
  if (char.length > 0) {
    char[0] = char[0].toUpperCase();
  }
  return char.join("");
};

export const retrieveFormData = (formElement: NodeListOf<FormFields>) => {
  let dataEntry: any = {};
  Array.from(formElement).forEach((element) => {
    if (element.name as FieldParams) {
      dataEntry[element.name] = element.value.toLowerCase();
    }
  });

  return dataEntry;
};
