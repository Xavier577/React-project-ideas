import { Component, Fragment, MouseEvent } from "react";
import usePaginate from "../hooks/usePaginate";
import Style from "../styles/components.module.css";
import { StudentTableComponent as STC } from "../types/types";

export default class StudentTable extends Component<
  STC["props"],
  STC["state"]
> {
  constructor(props: STC["props"]) {
    super(props);
    this.state = {
      currentPage: 1,
      studentsPerPage: 10,
    };
  }
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

  render() {
    const { currentPage } = this.state;
    const { data } = this.props;
    //eslint-disable-next-line
    const { renderPageNumbers, renderTableBody, pageNumbers } = usePaginate(
      data,
      this.state,
      this.handleClick
    );

    return (
      <div className={Style["student-table-container"]}>
        {this.props.data?.length ? (
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
                </tr>
              </thead>
              <tbody>{renderTableBody}</tbody>
            </table>
            <ul className={Style["pagination-bar"]}>
              {currentPage > 1 ? (
                <li onClick={this.goToPrevious}>prev</li>
              ) : null}
              {renderPageNumbers}
              {currentPage < pageNumbers[pageNumbers.length - 1] ? (
                <li onClick={this.goToNext}>next</li>
              ) : null}
            </ul>
          </Fragment>
        ) : (
          "No student currently in record..."
        )}
      </div>
    );
  }
}
