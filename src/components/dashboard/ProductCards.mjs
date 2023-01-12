import ProductCard from "./ProductCard.mjs";
import { useState } from "react";
import { myOrganizedProducts } from "../../api/products.js";

function ProductCards(props) {
  // set states for numbers on each card here (3x api calls)

  return (
    <>
      {" "}
      <section>
        <div className="row mt-3">
          <ProductCard
            number={props.overview.all.length}
            borderPostfix="primary"
            type="total-card"
            iconPostfix="shield-fill"
            title="All Saved Products"
          />
          <ProductCard
            number={props.overview.low.length}
            borderPostfix="warning"
            type="low-card"
            title="Low Stock Products"
            iconPostfix="shield-fill-exclamation"
          />
          <ProductCard
            number={props.overview.zero.length}
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
