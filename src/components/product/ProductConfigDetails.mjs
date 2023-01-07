import React from "react";
import ViewIdeal from "./ProductConfig/ViewIdeal.mjs";
import EditIdeal from "./ProductConfig/EditIdeal.mjs";

export default function ProductConfigDetails(props) {
  function checkMode(quantity) {
    if (props.mode === "editProduct") {
      return <EditIdeal quantity={quantity} />;
    } else {
      return <ViewIdeal quantity={quantity} />;
    }
  }
  return (
    <>
      {" "}
      <h3> Product configuration details </h3>
      <table className="table table-hover table-sm">
        <tbody>
          <tr>
            <th scope="row">
              {" "}
              Ideal quantity{" "}
              <p className="text-muted font-weight-normal mb-0">
                {" "}
                <small>
                  {" "}
                  The number of units of this product you prefer to keep in
                  stock.{" "}
                </small>
              </p>{" "}
            </th>
            {checkMode(props.productInfo.idealQuantity)}
          </tr>

          <tr>
            <th scope="row">
              {" "}
              Low stock quantity{" "}
              <p className="text-muted font-weight-normal mb-0">
                {" "}
                <small>
                  {" "}
                  The upper bound of the threshold you consider to be low stock.{" "}
                </small>
              </p>{" "}
            </th>
            {checkMode(props.productInfo.lowStockQuantity)}
          </tr>

          <tr>
            <th scope="row">
              {" "}
              Collection{" "}
              <p className="text-muted font-weight-normal mb-0">
                {" "}
                <small>
                  {" "}
                  The name of the collection that the product belongs to.{" "}
                </small>
              </p>{" "}
            </th>
            <td> {props.productInfo.collection}</td>
          </tr>

          <tr>
            <th scope="row">
              {" "}
              Date created{" "}
              <p className="text-muted font-weight-normal mb-0">
                {" "}
                <small>
                  {" "}
                  The date that the product was saved into your inventory.{" "}
                </small>
              </p>{" "}
            </th>
            <td> {props.productInfo.dateCreated}</td>
          </tr>
        </tbody>
      </table>{" "}
    </>
  );
}
