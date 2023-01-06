import React from "react";
import Navbar from "../components/dashboard/Navbar.mjs";

export default function Products() {
  return (
    <>
      {" "}
      <Navbar />{" "}
      <section className="container mt-3">
        {" "}
        <h1> Products </h1>
        <p className="muted"> All products associated with your account. </p>
      </section>{" "}
    </>
  );
}
