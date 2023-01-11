import React from "react";
import { Link } from "react-router-dom";
import { myProducts } from "../api/products.js";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar.mjs";

function SingleProduct(props) {
  function unitsRemaining() {
    const difference = props.ideal - props.currentStock;
    if (difference >= 0) {
      return difference;
    } else return `${Math.abs(difference)} (overstock)`;
  }
  return (
    <>
      <tr>
        <th>
          {" "}
          <Link to={`/product/${props.slug}`}>{props.name} </Link>
        </th>
        <td> {props.currentStock}</td>
        <td> {unitsRemaining()}</td>
        <td> {props.stockStatus}</td>
      </tr>
    </>
  );
}
export default function Products() {
  const [myFetched, setMyFetched] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await myProducts();
      setMyFetched(response.products.filter((product) => !product.isArchived));
    };

    try {
      fetchData();
    } catch (err) {}
    setMounted(true);
  }, []);

  function generateProducts() {
    const productsToDisplay = [];

    console.log(myFetched);
    for (const product of myFetched) {
      productsToDisplay.push(
        <SingleProduct
          key={product._id}
          name={product.name}
          currentStock={product.currentQuantity}
          lowStock={product.lowStockQuantity}
          stockStatus={product.stockStatus}
          collection={product.collectionName}
          slug={product.slug}
          ideal={product.idealQuantity}
        />
      );
    }

    return (
      <>
        {" "}
        <table className="table table-sm table-striped mt-3">
          <thead>
            <tr>
              <th scope="col"> Product name </th>
              <th scope="col"> Current stock </th>
              <th scope="col"> Units from ideal </th>
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
      {" "}
      <Navbar />{" "}
      <section className="container mt-3">
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
        <hr className="hr" />
        {mounted && generateProducts()}
      </section>{" "}
    </>
  );
}
