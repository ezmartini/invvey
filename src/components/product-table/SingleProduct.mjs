import React from "react";
import { Link } from "react-router-dom";

export default function SingleProduct(props) {
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
        <td> {props.collection ? props.collection.name : "Default"}</td>
        <td> {props.stockStatus}</td>
      </tr>
    </>
  );
}
