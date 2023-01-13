import React, { useState } from "react";
import Search from "./Search.mjs";
import SortFilter from "./SortFilter.mjs";

export default function SearchSortFilter(props) {
  return (
    <section className="mt-3 bg-light p-3 border">
      <h4 className="text-secondary"> Search and sort</h4>

      <Search handleSearch={props.handleSearch} />
      <SortFilter
        handleSort={props.handleSort}
        handleFilter={props.handleFilter}
      />
    </section>
  );
}
