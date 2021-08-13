import { Component, Fragment, MouseEvent, createRef, RefObject } from "react";
import usePaginate from "../hooks/usePaginate";
import Style from "../styles/components.module.css";
import { StudentData, StudentTableComponent as STC } from "../types/types";
import AddIcon from "./addIcon";
import AddStudentPopUP from "./addStudentPopUp";

export default class StudentTable extends Component<
  STC["props"],
  STC["state"]
> {
  paginationBar: RefObject<HTMLUListElement>;
  constructor(props: STC["props"]) {
    super(props);
    this.paginationBar = createRef<HTMLUListElement>();
    this.state = {
      currentPage: 1,
      studentsPerPage: 10,
      record: JSON.parse(
        localStorage.getItem("studentData") as string
      ) as StudentData[],
      isAddClicked: false,
    };
  }

  componentDidMount() {
    this.highlightCurrentPageNumber();
  }
  componentDidUpdate() {
    this.highlightCurrentPageNumber();
  }

  private highlightCurrentPageNumber = () => {
    let paginationBar = Array.from(
      (this.paginationBar?.current?.childNodes as NodeListOf<HTMLLIElement>) ??
        []
    );
    if (paginationBar.length > 0) {
      paginationBar?.forEach((paginationNumber) =>
        paginationNumber?.classList.remove(Style["current-page"])
      );
      let currentPaginationNumber = paginationBar?.find(
        (paginationNumber) =>
          Number(paginationNumber?.id) === this.state.currentPage
      );
      currentPaginationNumber?.classList.add(Style["current-page"]);
    }
  };

  private handleClick = (event: MouseEvent<HTMLLIElement>) => {
    this.setState({
      currentPage: Number(event.currentTarget.id),
    });
  };

  private goToPrevious = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  private goToNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  private removeAddStudentPrompt = () => {
    this.setState({ isAddClicked: false });
  };

  render() {
    const { currentPage } = this.state;
    const { data, editable } = this.props;
    //eslint-disable-next-line
    const { renderPageNumbers, renderTableBody, pageNumbers } = usePaginate(
      data,
      this.state,
      this.handleClick,
      editable
    );

    return (
      <div className={Style["student-table-container"]}>
        {this.state.isAddClicked ? (
          <AddStudentPopUP
            removeFunction={() => this.removeAddStudentPrompt()}
          />
        ) : null}
        {data?.length ? (
          <Fragment>
            <table className={Style["student-table"]}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Country</th>
                  <th>City</th>
                  <th>Code</th>
                  {editable ? (
                    <th
                      onClick={() =>
                        this.setState({
                          isAddClicked: !this.state.isAddClicked,
                        })
                      }
                    >
                      <AddIcon />
                    </th>
                  ) : null}
                </tr>
              </thead>
              <tbody>{renderTableBody}</tbody>
            </table>
            <ul ref={this.paginationBar} className={Style["pagination-bar"]}>
              {currentPage > 1 ? (
                <li
                  className={Style["prev-page-btn"]}
                  onClick={this.goToPrevious}
                >
                  prev
                </li>
              ) : null}
              {renderPageNumbers}
              {currentPage < pageNumbers[pageNumbers.length - 1] ? (
                <li className={Style["next-page-btn"]} onClick={this.goToNext}>
                  next
                </li>
              ) : null}
            </ul>
          </Fragment>
        ) : this.state.record.length < 1 ? (
          <span className={Style["flex-colum-center"]}>
            No student currently in record add students to see them in the
            student table...
            <br />
            {editable ? (
              <button
                className={Style["add-button"]}
                onClick={() =>
                  this.setState({ isAddClicked: !this.state.isAddClicked })
                }
              >
                <AddIcon />
              </button>
            ) : null}
          </span>
        ) : (
          "Student Does not exist in record..."
        )}
      </div>
    );
  }
}
