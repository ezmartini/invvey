import React from "react";
import Navbar from "../components/navbar/Navbar.mjs";
import { useState, useEffect } from "react";
import StockStatusTag from "../components/product/StockStatusTag.mjs";
import StockDetails from "../components/product/StockDetails.mjs";
import ProductConfigDetails from "../components/product/ProductConfigDetails.mjs";
import { viewProduct } from "../api/products.js";
import { useNavigate, useParams } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  const [params, setParams] = useState(useParams());

  const [productInfo, setProductInfo] = useState();
  const [mounted, setMounted] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await viewProduct(params.slug);
      return response;
    };

    try {
      fetchData();
    } catch (err) {}
    setMounted(true);
  }, []);

  const initMode = "view";
  const [mode, setMode] = useState(initMode);

  function editStockMode() {
    const edit = "editStock";
    if (mode === edit) {
      console.log("update here");
      setMode(initMode);
    } else {
      setMode(edit);
    }
  }

  function editProductMode() {
    const edit = "editProduct";
    if (mode === edit) {
      console.log("update here");
      setMode(initMode);
    } else {
      setMode(edit);
    }
  }

  function refreshPage() {
    navigate(0);
    console.log("refresh");
  }

  return (
    <>
      {" "}
      <Navbar />{" "}
      {!productInfo ? (
        <> </>
      ) : (
        <section className="container mt-3">
          <StockStatusTag status={productInfo.stockStatus} />
          <h2> {productInfo.name} </h2>
          <div className="col-lg-2 col-md-4 col-sm-6 p-0 text-center">
            <p className="border border-gray rounded p-2 bg-light text-secondary">
              {productInfo.collectionName
                ? productInfo.collectionName.name
                : "Default collection"}
            </p>
          </div>
          <p className="text-muted"> {productInfo.description} </p>
          <hr className="hr" />
          <StockDetails
            refreshPage={refreshPage}
            productInfo={productInfo}
            mode={mode}
          />
          <ProductConfigDetails
            refreshPage={refreshPage}
            productInfo={productInfo}
            mode={mode}
          />
          <div className="row">
            <button
              type="button"
              className="btn btn-outline-primary ml-2 mr-1 mb-1"
              onClick={editProductMode}
            >
              Update product configuration
            </button>

            <button
              type="button"
              className="btn btn-primary ml-2 mr-1 mb-1"
              onClick={editStockMode}
            >
              Update current stock
            </button>
          </div>
          <p className="text-muted p-1">
            {" "}
            <small>
              {" "}
              <i> Last updated {productInfo.dateLastUpdated} </i>{" "}
            </small>
          </p>{" "}
        </section>
      )}
    </>
  );
}
