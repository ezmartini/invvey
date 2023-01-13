import React, { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  function onSearchSubmit(e) {
    e.preventDefault();
    props.handleSearch(search);
  }
  return (
    <form onSubmit={(e) => onSearchSubmit(e)}>
      <div className="form-row mt-2">
        <div className="form-group col-lg-4 col-sm-9">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="form-control"
            id="search"
            placeholder="Search..."
          />
        </div>
        <div className="form-group col-lg-2 col-sm-3">
          <button type="submit" className="btn btn-primary">
            {" "}
            <i className="bi bi-search"></i>{" "}
          </button>
        </div>
      </div>
    </form>
  );
}
