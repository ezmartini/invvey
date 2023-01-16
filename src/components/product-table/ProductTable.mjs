import React, { useState } from "react";
import SingleProduct from "./SingleProduct.mjs";

export default function ProductTable(props) {
  const displayArr = [];

  for (const product of props.toDisplay) {
    displayArr.push(
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
    <table className="table table-sm table-striped mt-3">
      <thead>
        <tr>
          <th scope="col"> Product name </th>
          <th scope="col"> Current stock </th>
          <th scope="col"> Units from ideal </th>
          <th scope="col"> Collection </th>
          <th scope="col"> Status </th>
        </tr>
      </thead>

      {displayArr.length > 0 ? (
        <tbody>{displayArr}</tbody>
      ) : (
        <p className="mt-2 text-secondary">
          {" "}
          <i> No products to display. </i>{" "}
        </p>
      )}
    </table>
  );
}
