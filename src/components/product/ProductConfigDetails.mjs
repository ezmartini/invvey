import React, { useState } from "react";
import ViewIdeal from "./ProductConfig/ViewIdeal.mjs";
import EditIdeal from "./ProductConfig/EditIdeal.mjs";
import { editProductConfig } from "../../api/products.js";
import { useNavigate } from "react-router-dom";

export default function ProductConfigDetails(props) {
  const [errMessage, setErrMessage] = useState("");

  function checkMode(quantity, role) {
    if (props.mode === "editProduct") {
      return (
        <EditIdeal
          refreshPage={props.refreshPage}
          saveConfig={saveConfig}
          role={role}
          quantity={quantity}
        />
      );
    } else {
      return <ViewIdeal quantity={quantity} />;
    }
  }

  async function saveConfig(role, val) {
    if (role === "idealQuantity" && val <= props.productInfo.lowStockQuantity) {
      setErrMessage("Ideal quantity must be greater than low stock quantity.");
    } else if (
      role === "lowStockQuantity" &&
      val > props.productInfo.idealQuantity
    ) {
      setErrMessage("Low stock quantity must be less than ideal quantity.");
    } else {
      try {
        const response = await editProductConfig(
          role,
          val,
          props.productInfo._id
        );
        props.refreshPage();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      {" "}
      <h3> Product configuration details </h3>
      {errMessage && (
        <div class="alert alert-danger" role="alert">
          {errMessage}
        </div>
      )}
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
            {checkMode(props.productInfo.idealQuantity, "idealQuantity")}
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
            {checkMode(props.productInfo.lowStockQuantity, "lowStockQuantity")}
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
            <td>
              {props.productInfo.collectionName
                ? props.productInfo.collectionName.name
                : "Default collection"}
            </td>
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
