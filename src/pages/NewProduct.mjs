import React, { useState, useEffect } from "react";
import { myCollections } from "../api/collections.js";
import { addProduct } from "../api/products.js";
import Navbar from "../components/navbar/Navbar.mjs";

function CollectionsSelect(collections) {
  const toSelect = collections.map((collection) => (
    <option value={collection._id} key={collection.name}>
      {" "}
      {collection.name}{" "}
    </option>
  ));

  console.log(toSelect);
  return toSelect;
}

function NewProductForm() {
  const [mounted, setMounted] = useState(false);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await myCollections();
      setCollections(response.collections);
    };

    try {
      fetchData();
    } catch (err) {}
    setMounted(true);
  }, []);

  const [errMessage, setErrMessage] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [currentStock, setCurrentStock] = useState(0);
  const [idealStock, setIdealStock] = useState(0);
  const [lowStock, setLowStock] = useState(0);
  const [inCollection, setInCollection] = useState("default");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProductData = {
      idealStock,
      productName,
      productDesc,
      currentStock,
      lowStock,
      inCollection,
    };

    try {
      const response = await addProduct(newProductData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      {errMessage && (
        <p className="alert alert-danger mt-3" role="alert">
          {" "}
          {errMessage}{" "}
        </p>
      )}
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName"> Product name </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            aria-describedby="productName"
            autoComplete="nope"
            placeholder="Product name"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="productDescription"> Product description </label>
          <textarea
            type="text-area"
            className="form-control"
            id="productDesc"
            aria-describedby="productDesc"
            placeholder="Product description (expiry date, where to buy, instructions for use, etc.) "
            onChange={(e) => setProductDesc(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="mb-0" htmlFor="currentUnits">
            Number of units currently in stock{" "}
          </label>
          <p className="text-muted my-1">
            {" "}
            The number of units currently in your inventory.{" "}
          </p>
          <input
            type="number"
            className="form-control"
            id="numberInStock"
            placeholder="Number of units"
            min="0"
            onChange={(e) => setCurrentStock(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="mb-0" htmlFor="currentUnits">
            {" "}
            Ideal stock quantity{" "}
          </label>
          <p className="text-muted my-1">
            {" "}
            The ideal number of units you typically like to keep in stock.{" "}
          </p>
          <input
            type="number"
            className="form-control"
            id="numberInStock"
            placeholder="Number of units"
            min={lowStock}
            onChange={(e) => setIdealStock(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="mb-0" htmlFor="currentUnits">
            {" "}
            Low stock quantity{" "}
          </label>
          <p className="text-muted my-1">
            {" "}
            The greatest number of units (quantity) that you consider to be low
            stock.{" "}
          </p>
          <input
            type="number"
            className="form-control"
            id="numberInStock"
            placeholder="Number of units"
            min="0"
            onChange={(e) => setLowStock(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="mb-0" htmlFor="exampleFormControlSelect1">
            {" "}
            Select collection{" "}
          </label>
          <p className="text-muted my-1">
            {" "}
            Organize your products by storing this product in a collection.
          </p>
          <select
            onChange={(e) => {
              setInCollection(e.target.value);
              console.log(e.target.value);
            }}
            className="form-control"
            id="exampleFormControlSelect1"
          >
            <option key="0"> Default collection </option>
            {CollectionsSelect(collections)}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}
export default function NewProduct() {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <h1> New Product </h1>
        <p className="text-muted">
          {" "}
          Add a new product to an existing collection.{" "}
        </p>

        <NewProductForm />
      </section>
    </>
  );
}
