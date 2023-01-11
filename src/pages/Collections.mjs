import React from "react";
import Navbar from "../components/navbar/Navbar.mjs";

export default function Collections() {
  return (
    <>
      {" "}
      <Navbar />{" "}
      <section className="container mt-3">
        <h1> Collections </h1>
        <p className="text-muted">
          {" "}
          All collections associated with your account.{" "}
        </p>
        <a className="btn btn-primary text-white" href="/new-collection">
          {" "}
          + Add new collection
        </a>
        <hr className="hr" />
      </section>
    </>
  );
}
