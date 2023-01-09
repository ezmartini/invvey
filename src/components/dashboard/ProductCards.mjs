import ProductCard from "./ProductCard.mjs";
import { useState } from "react";
import { myOrganizedProducts } from "../../api/products.js";

function ProductCards() {
  // set states for numbers on each card here (3x api calls)

  const [ok, setOk] = useState("");
  const [low, setLow] = useState("");
  const [zero, setZero] = useState("");

  async function getOrganizedProducts() {
    try {
      console.log("hi");
      const products = await myOrganizedProducts();
    } catch (err) {}
  }
  return (
    <>
      {" "}
      <section onLoadStart={getOrganizedProducts()}>
        <div className="row mt-3">
          <ProductCard
            number="60"
            borderPostfix="primary"
            type="total-card"
            iconPostfix="shield-fill"
            title="All Saved Products"
          />
          <ProductCard
            number="12"
            borderPostfix="warning"
            type="low-card"
            title="Low Stock Products"
            iconPostfix="shield-fill-exclamation"
          />
          <ProductCard
            number="3"
            borderPostfix="danger"
            type="zero-card"
            title="Zero Stock Products"
            iconPostfix="shield-fill-x"
          />
        </div>
      </section>{" "}
    </>
  );
}

export default ProductCards;
