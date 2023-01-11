import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { myCollections } from "../api/collections.js";
import Navbar from "../components/navbar/Navbar.mjs";

function SingleCollection(props) {
  return (
    <>
      <tr>
        <th>
          {" "}
          <Link to={`/collection/${props.slug}`}>{props.name} </Link>
        </th>
        <td> {props.totalProducts}</td>
        <td> {props.criticalProducts} </td>
        <td> {props.OKproducts}</td>
      </tr>
    </>
  );
}
export default function Collections() {
  const [myFetched, setMyFetched] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await myCollections();
      setMyFetched(response.collections);
    };

    try {
      fetchData();
    } catch (err) {}
    setMounted(true);
  }, []);

  function GenerateCollections() {
    const collectionsToDisplay = [];

    for (const collection of myFetched) {
      console.log(collection.allProducts.length);
      collectionsToDisplay.push(
        <SingleCollection
          key={collection._id}
          name={collection.name}
          totalProducts={collection.allProducts.length}
          criticalProducts={
            collection.allProducts.filter(
              (product) => product.stockStatus != "OK"
            ).length
          }
          OKproducts={
            collection.allProducts.filter(
              (product) => product.stockStatus === "OK"
            ).length
          }
          slug={collection.slug}
        />
      );
    }

    return (
      <>
        {" "}
        <table className="table table-sm table-striped mt-3">
          <thead>
            <tr>
              <th scope="col"> Collection name </th>
              <th scope="col"> Total # of products </th>
              <th scope="col"> # of Low/Zero stock products</th>
              <th scope="col"> # of OK stock products </th>
            </tr>
          </thead>
          <tbody>{collectionsToDisplay}</tbody>
        </table>
      </>
    );
  }
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
        {mounted && GenerateCollections()}
      </section>
    </>
  );
}
