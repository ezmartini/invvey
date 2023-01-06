import React from "react";
import CurrentStock from "./StockDetails/CurrentStock.mjs";
import EditStock from "./StockDetails/EditStock.mjs";

export default function StockDetails(props) {
  function checkMode() {
    const quantity = props.productInfo.currentQuantity;
    if (props.mode === "editStock") {
      return <EditStock quantity={quantity} />;
    } else {
      return <CurrentStock quantity={quantity} />;
    }
  }
  return (
    <>
      <h3> Stock details </h3>
      <table className="table table-hover table-sm">
        <tbody>
          <tr>
            <th scope="row">
              {" "}
              Current stock{" "}
              <p className="text-muted font-weight-normal mb-0">
                {" "}
                <small> Quantity currently available in your inventory. </small>
              </p>{" "}
            </th>
            {checkMode()}
          </tr>

          <tr>
            <th scope="row">
              {" "}
              Units remaining to reach ideal quantity{" "}
              <p className="text-muted font-weight-normal mb-0">
                {" "}
                <small>
                  {" "}
                  Additional units required to reach the ideal quantity for this
                  product.{" "}
                </small>
              </p>{" "}
            </th>
            <td>
              {" "}
              {props.productInfo.idealQuantity -
                props.productInfo.currentQuantity}{" "}
              units{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
