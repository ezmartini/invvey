import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar.mjs";
import { useParams } from "react-router-dom";
import { viewCollection } from "../api/collections.js";
import SingleProduct from "../components/product-table/SingleProduct.mjs";
import SearchSortFilter from "../components/search-sort-filter/SearchSortFilter.mjs";
import { searchProducts } from "../api/products.js";

export default function Collection() {
  const initalCollection = {
    name: "Carpet cleaners",
    description: "No description provided. ",
    allProducts: [],
    _id: "12345",
  };
  const [params, setParams] = useState(useParams());
  const [mounted, setMounted] = useState(false);
  const [collectionInfo, setCollectionInfo] = useState(initalCollection);
  const [isAll, setIsAll] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await viewCollection(params.slug);
      setCollectionInfo(response.collection);
    };

    try {
      fetchData();
    } catch (err) {}
    setMounted(true);
  }, []);

  async function handleFilter(val) {}

  async function handleSearch(val) {}

  async function handleSort(val) {}

  function generateCollection() {
    const productsToDisplay = [];

    const thisCollection = {
      name: collectionInfo.name,
    };

    for (const product of collectionInfo.allProducts) {
      if (!product.isArchived) {
        productsToDisplay.push(
          <SingleProduct
            key={product._id}
            slug={product.slug}
            currentStock={product.currentQuantity}
            name={product.name}
            ideal={product.idealQuantity}
            collection={thisCollection}
            stockStatus={product.stockStatus}
          />
        );
      }
    }

    return (
      <>
        <h2> Products in collection ({collectionInfo.allProducts.length}) </h2>
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
      <Navbar />
      <section className="container mt-3">
        <h1> {collectionInfo.name} </h1>
        <p className="text-muted"> {collectionInfo.description} </p>
        <hr className="hr" />
        {mounted && generateCollection()}
      </section>
    </>
  );
}
