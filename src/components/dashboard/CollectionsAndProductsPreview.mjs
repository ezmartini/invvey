import { useState } from "react";
import CollectionsPreview from "./CollectionsPreview.mjs";
import ProductsPreview from "./ProductsPreview.mjs";

function CollectionsAndProductsPreview(props) {
  const [active, setActive] = useState("Products");

  function determinePreview() {
    if (active === "Collections") {
      return <CollectionsPreview />;
    } else {
      return <ProductsPreview toDisplay={props.toDisplay} />;
    }
  }
  return (
    <>
      {" "}
      <h3 className="mt-4">
        {" "}
        Overview of Products & Collections for {props.name}
      </h3>{" "}
      <p className="muted">
        {" "}
        The most recently updated collections and products associated with your
        account. Click on any collection or product to learn more.{" "}
      </p>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className={"nav-link"} href="/products">
            Products
          </a>
        </li>
      </ul>
      {determinePreview()}
    </>
  );
}

export default CollectionsAndProductsPreview;
