import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCollection } from "../api/collections.js";
import Navbar from "../components/navbar/Navbar.mjs";

// name
// description

function NewCollectionForm() {
  const [errMessage, setErrMessage] = useState("");
  const [collectionName, setCollectionName] = useState("");
  const [collectionDesc, setCollectionDesc] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const NewCollectionData = {
      collectionName,
      collectionDesc,
    };

    try {
      const response = await addCollection(NewCollectionData);
      nav("/collections");
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
          <label htmlFor="collectionName"> Collection name </label>
          <input
            type="text"
            className="form-control"
            id="collectionName"
            aria-describedby="collectionName"
            autoComplete="nope"
            placeholder="Collection name"
            onChange={(e) => setCollectionName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="collectionDescription">
            {" "}
            Collection description{" "}
          </label>
          <textarea
            type="text-area"
            className="form-control"
            id="productDesc"
            aria-describedby="productDesc"
            placeholder="Collection description "
            onChange={(e) => setCollectionDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}
export default function NewCollection() {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <h1> New Collection </h1>
        <p className="text-muted">
          {" "}
          Create a new collection to organize your products.{" "}
        </p>
        <NewCollectionForm />
      </section>
    </>
  );
}
