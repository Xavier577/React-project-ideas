import { MouseEventHandler, RefObject } from "react";
import { StudentData } from "../types/types";

const usePaginate = (
  data: StudentData[] | undefined,
  {
    currentPage,
    studentsPerPage,
  }: {
    currentPage: number;
    studentsPerPage: number;
  },
  clickFunction: MouseEventHandler<HTMLLIElement>
) => {
  const indexOfLastTodo = currentPage * studentsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - studentsPerPage;
  const currentData = data?.slice(indexOfFirstTodo, indexOfLastTodo);

  const pageNumbers = [];
  let maxPageNumber = Math.ceil((data?.length || 0) / studentsPerPage);
  for (let i = 1; i <= maxPageNumber; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number, idx) => {
    return (
      <li key={idx} id={number.toString()} onClick={clickFunction}>
        {number}
      </li>
    );
  });
  const renderTableBody = currentData?.map((student, index) => {
    const indexInFullData = data?.findIndex(
      (entry, index) =>
        entry.name === student.name &&
        entry.status === student.status &&
        entry.country === student.country &&
        entry.city === student.city &&
        entry.code === student.code
    );
    return (
      <tr key={indexInFullData || index}>
        <td>{(indexInFullData || index) + 1}</td>
        <td>{student?.name}</td>
        <td>{student?.status}</td>
        <td>{student?.country}</td>
        <td>{student?.city}</td>
        <td>{student?.code}</td>
      </tr>
    );
  });

  return { renderPageNumbers, renderTableBody, pageNumbers };
};

export default usePaginate;
