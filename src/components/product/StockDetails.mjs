import React from "react";
import { useNavigate } from "react-router-dom";
import { editProduct } from "../../api/products.js";
import CurrentStock from "./StockDetails/CurrentStock.mjs";
import EditStock from "./StockDetails/EditStock.mjs";

export default function StockDetails(props) {
  async function saveStock(val) {
    try {
      const response = await editProduct(val, props.productInfo._id);
      props.refreshPage();
    } catch (err) {}
  }

  const difference =
    props.productInfo.idealQuantity - props.productInfo.currentQuantity;
  function checkMode(role) {
    const quantity = props.productInfo.currentQuantity;
    if (props.mode === "editStock") {
      return (
        <EditStock saveStock={saveStock} role={role} quantity={quantity} />
      );
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
            {checkMode("currentStock")}
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
              {difference < 0
                ? Math.abs(difference) + " units over"
                : difference + " units"}{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
