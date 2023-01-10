import React, { useState } from "react";
import { addProduct } from "../api/products.js";
import Navbar from "../components/navbar/Navbar.mjs";

function NewProductForm() {
  const [errMessage, setErrMessage] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [stockStatus, setStockStatus] = useState("Low");
  const [currentStock, setCurrentStock] = useState(0);
  const [lowStock, setLowStock] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentStock > lowStock && currentStock > 0) {
      setStockStatus("OK");
    } else if (currentStock == 0) {
      setStockStatus("Zero");
    }

    const newProductData = {
      productName,
      productDesc,
      currentStock,
      lowStock,
      stockStatus,
    };

    try {
      const response = await addProduct(newProductData);
      console.log(response);
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
      <form onSubmit={handleSubmit}>
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