import { Link } from "react-router-dom";
import { useState } from "react";
import ProductCards from "../components/dashboard/ProductCards.mjs";
import CollectionsAndProductsPreview from "../components/dashboard/CollectionsAndProductsPreview.mjs";

function ProductsPreview(props) {
  function SingularProduct(props) {
    return (
      <tr>
        <td> {props.name} </td>
        <td> {props.numInStock} </td>
        <td> {props.unitsNeeded} </td>
        <td> {props.stockLevel} </td>
        <td> {props.lastUdpated} </td>
      </tr>
    );
  }

  return (
    <>
      <table className="table table-hover table-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th scope="col">Product name</th>
            <th scope="col"> # Units in stock </th>
            <th scope="col"> # Units Needed </th>
            <th scope="col"> Stock level</th>
            <th scope="col">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <SingularProduct
            name="Olaplex Curly Shampoo"
            numInStock="10"
            stockLevel="Low"
            unitsNeeded="12"
            lastUdpated="April 1, 2022"
          />
          <SingularProduct
            name="Olaplex Oil"
            numInStock="10"
            stockLevel="Low"
            unitsNeeded="13"
            lastUdpated="April 1, 2022"
          />
        </tbody>
      </table>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <section className="container mt-4">
        {" "}
        <h1> Dashboard </h1> <ProductCards />
        <hr class="hr" />
        <CollectionsAndProductsPreview />
      </section>
    </>
  );
}

export default Dashboard;
