import React from "react";
import Navbar from "../components/navbar/Navbar.mjs";
import { useState } from "react";
import StockStatusTag from "../components/product/StockStatusTag.mjs";
import StockDetails from "../components/product/StockDetails.mjs";
import ProductConfigDetails from "../components/product/ProductConfigDetails.mjs";

export default function Product() {
  const initialProduct = {
    name: "Olaplex No. 4 Bond Maintenance™ Shampoo",
    description: "No description provided. ",
    price: "$20.99",
    currentQuantity: 10,
    idealQuantity: 11,
    lowStockQuantity: 5,
    stockStatus: "Low",
    collection: "Client shampoos",
    dateUpdated: "April 2, 2022",
    dateCreated: "May 21, 2021",
  };

  const [productInfo, setProductInfo] = useState(initialProduct);
  const initMode = "view";
  const [mode, setMode] = useState(initMode);

  function editStockMode() {
    const edit = "editStock";
    if (mode === edit) {
      console.log("update here");
      setMode(initMode);
    } else {
      setMode(edit);
    }
  }

  function editProductMode() {
    const edit = "editProduct";
    if (mode === edit) {
      console.log("update here");
      setMode(initMode);
    } else {
      setMode(edit);
    }
  }

  return (
    <>
      {" "}
      <Navbar />{" "}
      <section className="container mt-3">
        <StockStatusTag status={productInfo.stockStatus} />
        <h2> {productInfo.name} </h2>
        <div className="col-lg-2 col-md-4 col-sm-6 p-0 text-center">
          <p className="border border-gray rounded p-2 bg-light text-secondary">
            {" "}
            {productInfo.collection}{" "}
          </p>{" "}
        </div>
        <p className="text-muted"> {productInfo.description} </p>
        <hr className="hr" />
        <StockDetails productInfo={productInfo} mode={mode} />
        <ProductConfigDetails productInfo={productInfo} mode={mode} />
        <div className="row">
          <button
            type="button"
            className="btn btn-outline-primary ml-2 mr-1 mb-1"
            onClick={editProductMode}
          >
            Update product configuration
          </button>

          <button
            type="button"
            className="btn btn-primary ml-2 mr-1 mb-1"
            onClick={editStockMode}
          >
            Update current stock
          </button>
        </div>
        <p className="text-muted p-1">
          {" "}
          <small>
            {" "}
            <i> Last updated {productInfo.dateUpdated} </i>{" "}
          </small>
        </p>{" "}
      </section>
    </>
  );
}
