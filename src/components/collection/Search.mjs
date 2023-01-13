import React from "react";
import Search from "../product/search-sort-filter/products/Search.mjs";

export default function SearchSortFilter(props) {
  // props handleSearch

  return (
    <section className="mt-3 bg-light p-3 border">
      <h4 className="text-secondary"> Search collection names </h4>

      <Search />
    </section>
  );
}
