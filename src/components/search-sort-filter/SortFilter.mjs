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

  const filter = props.filterOpts.map((opt) => {
    return (
      <option key={opt.val} value={opt.val}>
        {" "}
        {opt.inner}
      </option>
    );
  });

  const sort = props.sortOpts.map((opt) => {
    return (
      <option key={opt.val} value={opt.val}>
        {" "}
        {opt.inner}
      </option>
    );
  });

  return (
    <div className="row">
      <form className="col-lg-6">
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
                Filter by...{" "}
              </option>
              {filter}
            </select>
          </div>
          <div className="form-group col-lg-2 col-sm-3"></div>
        </div>
      </form>

      <form className="col-lg-6">
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
              {sort}
            </select>
          </div>
          <div className="form-group col-lg-2 col-sm-3"></div>
        </div>
      </form>
    </div>
  );
}
