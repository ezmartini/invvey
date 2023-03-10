import React from "react";
import {
  filterProducts,
  myProducts,
  searchProducts,
  sortProducts,
} from "../api/products.js";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar.mjs";
import SearchSortFilter from "../components/search-sort-filter/SearchSortFilter.mjs";
import ProductTable from "../components/product-table/ProductTable.mjs";

export default function Products() {
  const [myFetched, setMyFetched] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [isAll, setIsAll] = useState(true);

  async function handleSearch(val) {
    try {
      const searched = await searchProducts(val);
      if (searched) {
        setMyFetched(
          searched.products.filter((product) => !product.isArchived)
        );
        setIsAll(false);
      }
    } catch (err) {}
  }

  async function handleFilter(val) {
    try {
      const searched = await filterProducts(val);
      if (searched) {
        setMyFetched(
          searched.products.filter((product) => !product.isArchived)
        );
        setIsAll(false);
      }
    } catch (err) {}
  }

  async function handleSort(val) {
    try {
      const searched = await sortProducts(val);
      if (searched) {
        setMyFetched(
          searched.products.filter((product) => !product.isArchived)
        );
        setIsAll(false);
      }
    } catch (err) {}
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await myProducts();
      setMyFetched(response.products.filter((product) => !product.isArchived));
    };

    try {
      fetchData();
      setMounted(true);
      setIsAll(true);
    } catch (err) {}
  }, []);

  function generateProducts() {
    return (
      <>
        {" "}
        {isAll ? (
          <h2> All saved products ({myFetched.length})</h2>
        ) : (
          <h2> Results ({myFetched.length})</h2>
        )}
        <SearchSortFilter
          handleSearch={handleSearch}
          handleFilter={handleFilter}
          handleSort={handleSort}
          sortOpts={[
            { val: "stockHtoL", inner: "Current stock (high to low)" },
            { val: "stockLtoH", inner: "Current stock (low to high)" },
            { val: "alphaAtoZ", inner: "Alphabetical (A-Z)" },
            { val: "alphaZtoA", inner: "Alphabetical (Z-A)" },
            { val: "mostRecent", inner: "Most recently updated" },
            { val: "leastRecent", inner: "Least recently updated " },
          ]}
          filterOpts={[
            { val: "OK", inner: "OK stock products" },
            { val: "Low", inner: "Low stock products" },
            { val: "Zero", inner: "Zero stock products" },
          ]}
        />
        {!mounted ? <> </> : <ProductTable toDisplay={myFetched} />}
      </>
    );
  }
  return (
    <>
      {" "}
      <Navbar />{" "}
      <section className="container mt-3">
        {" "}
        <h1> Products </h1>
        <p className="text-muted">
          {" "}
          All products associated with your account.{" "}
        </p>
        <a className="btn btn-primary text-white" href="/new-product">
          {" "}
          + Add new product
        </a>
        <hr className="hr" />
        {mounted && generateProducts()}
      </section>{" "}
    </>
  );
}
