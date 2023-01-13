import React from "react";
import {
  filterProducts,
  myProducts,
  searchProducts,
  sortProducts,
} from "../api/products.js";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar.mjs";
import SingleProduct from "../components/product-table/SingleProduct.mjs";
import SearchSortFilter from "../components/product/search-sort-filter/products/SearchSortFilter.mjs";

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
      setIsAll(true);
    } catch (err) {}
    setMounted(true);
  }, []);

  function generateProducts() {
    const productsToDisplay = [];

    for (const product of myFetched) {
      productsToDisplay.push(
        <SingleProduct
          key={product._id}
          name={product.name}
          currentStock={product.currentQuantity}
          lowStock={product.lowStockQuantity}
          stockStatus={product.stockStatus}
          collection={product.collectionName}
          slug={product.slug}
          ideal={product.idealQuantity}
        />
      );
    }

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
        />
        <table className="table table-sm table-striped mt-3">
          <thead>
            <tr>
              <th scope="col"> Product name </th>
              <th scope="col"> Current stock </th>
              <th scope="col"> Units from ideal </th>
              <th scope="col"> Collection </th>
              <th scope="col"> Status </th>
            </tr>
          </thead>
          <tbody>{productsToDisplay}</tbody>
        </table>
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
