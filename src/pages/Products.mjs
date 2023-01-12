import React from "react";
import { myProducts } from "../api/products.js";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar.mjs";
import SingleProduct from "../components/product-table/SingleProduct.mjs";
import SearchSortFilter from "../components/search-sort-filter/SearchSortFilter.mjs";
export default function Products() {
  const [myFetched, setMyFetched] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [toFetch, setToFetch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (toFetch === "") {
        response = await myProducts();
      }

      setMyFetched(response.products.filter((product) => !product.isArchived));
    };

    try {
      fetchData();
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
        <h2> All saved products ({myFetched.length})</h2>
        <SearchSortFilter />
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
