import React from "react";
import { myProducts } from "../api/products.js";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar.mjs";

export default function Products() {
  const [myFetched, setMyFetched] = useState([]);

  async function getAllProducts() {
    try {
      const response = await myProducts();
      console.log(response);
    } catch (error) {}
  }

  return (
    <>
      {" "}
      <Navbar />{" "}
      <section onLoad={getAllProducts()} className="container mt-3">
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
      </section>{" "}
    </>
  );
}
