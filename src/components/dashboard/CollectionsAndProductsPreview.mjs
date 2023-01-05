import { useState } from "react";
import CollectionsPreview from "./CollectionsPreview.mjs";
import ProductsPreview from "./ProductsPreview.mjs";

function CollectionsAndProductsPreview() {
  const [active, setActive] = useState("Collections");

  function determinePreview() {
    if (active === "Collections") {
      return <CollectionsPreview />;
    } else {
      return <ProductsPreview />;
    }
  }
  return (
    <>
      {" "}
      <h3 className="mt-4">
        {" "}
        Overview of Products & Collections for House of Beauty
      </h3>{" "}
      <p className="muted">
        {" "}
        The most recently updated collections and products associated with your
        account. Click on any collection or product to learn more.{" "}
      </p>
      <ul
        className="nav nav-tabs"
        onClick={(e) => setActive(e.target.innerHTML)}
      >
        {" "}
        <li className="nav-item">
          <a className={"nav-link"} href="#">
            Collections
          </a>
        </li>
        <li className="nav-item">
          <a className={"nav-link"} href="#">
            Products
          </a>
        </li>
      </ul>
      {determinePreview()}
    </>
  );
}

export default CollectionsAndProductsPreview;
