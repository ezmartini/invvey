import React from "react";

export default function SortFilter(props) {
  function onFilterChange(e) {
    e.preventDefault();
    props.handleFilter(e.target.value);
  }

  function onSortChange(e) {
    e.preventDefault();
    props.handleSort(e.target.value);
  }

  return (
    <div className="row">
      <form className="col-lg-4">
        <div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="filter-icon">
                <i className="bi bi-filter"></i>
              </span>
            </div>
            <select
              onChange={(e) => onFilterChange(e)}
              id="filter"
              className="form-control"
            >
              <option selected value="0">
                {" "}
                Filter by stock status...{" "}
              </option>
              <option value="OK"> OK </option>
              <option value="Low"> Low </option>
              <option value="Zero"> Zero </option>
            </select>
          </div>
          <div className="form-group col-lg-2 col-sm-3"></div>
        </div>
      </form>

      <form className="col-lg-4">
        <div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="sort-icon">
                <i className="bi bi-sort-up-alt"></i>
              </span>
            </div>
            <select
              onChangeCapture={(e) => onSortChange(e)}
              id="sort"
              className="form-control"
            >
              <option selected> Sort by... </option>
              <option value="statusHtoL"> Stock status (high to low) </option>
              <option value="statusLtoH"> Stock status (low to high) </option>
              <option value="stockHtoL"> Current stock (high to low) </option>
              <option value="stockLtoH"> Current stock (low to high) </option>
              <option value="alphaAtoZ"> Alphabetical (A-Z) </option>
              <option value="alphaZtoA"> Alphabetical (Z-A) </option>
            </select>
          </div>
          <div className="form-group col-lg-2 col-sm-3"></div>
        </div>
      </form>
    </div>
  );
}
