import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar.mjs";
import { useParams } from "react-router-dom";
import { viewCollection } from "../api/collections.js";

export default function Collection() {
  const initalCollection = {
    name: "Carpet cleaners",
    description: "No description provided. ",
    allProducts: [],
    _id: "12345",
  };

  const [params, setParams] = useState(useParams());
  const [myFetched, setMyFetched] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [collectionInfo, setCollectionInfo] = useState(initalCollection);

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

  function generateCollection() {}
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        <h1> {collectionInfo.name} </h1>
        <p className="text-muted"> {collectionInfo.description} </p>
        <a className="btn btn-primary text-white" href="/new-product">
          {" "}
          + Add new product to this collection
        </a>
        <hr className="hr" />
        {mounted && generateCollection()}
      </section>
    </>
  );
}
