import ProductCards from "../components/dashboard/ProductCards.mjs";
import CollectionsAndProductsPreview from "../components/dashboard/CollectionsAndProductsPreview.mjs";
import Navbar from "../components/navbar/Navbar.mjs";
import { myProducts, sortProducts } from "../api/products.js";
import React, { useState, useEffect } from "react";
import { me } from "../api/user.js";

function Dashboard() {
  const [products, setProducts] = useState({ all: [], low: [], zero: [] });
  const [productTable, setProductTable] = useState([]);
  const [name, setName] = useState("me");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const productResponse = await myProducts();

      const low = [];
      const zero = [];
      productResponse.products.forEach((product) => {
        if (product.stockStatus === "Zero") {
          zero.push(product);
        } else if (product.stockStatus === "Low") {
          low.push(product);
        }
      });

      const productTableResponse = await sortProducts("mostRecent");

      const businessName = await me();

      setName(businessName.name);
      setProducts({ all: productResponse.products, low, zero });
      setProductTable(productTableResponse.products.splice(0, 5));
      setMounted(true);
    };

    try {
      fetchData();
    } catch (err) {}
  }, []);

  return (
    <>
      <Navbar />
      {!mounted ? (
        <> </>
      ) : (
        <section className="container mt-3">
          {" "}
          <h1> Dashboard </h1> <ProductCards overview={products} />
          <hr />
          <CollectionsAndProductsPreview name={name} toDisplay={productTable} />
        </section>
      )}
    </>
  );
}

export default Dashboard;
