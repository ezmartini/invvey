import ProductCards from "../components/dashboard/ProductCards.mjs";
import CollectionsAndProductsPreview from "../components/dashboard/CollectionsAndProductsPreview.mjs";
import Navbar from "../components/navbar/Navbar.mjs";
import { myProducts } from "../api/products.js";
import React, { useState, useEffect } from "react";

function Dashboard() {
  const [products, setProducts] = useState({ all: [], low: [], zero: [] });
  const [collections, setCollections] = useState([]);
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

      // this should be destructured
      setProducts({ all: productResponse.products, low, zero });
    };

    try {
      fetchData();
    } catch (err) {}
    setMounted(true);
  }, []);

  return (
    <>
      <Navbar />
      <section className="container mt-3">
        {" "}
        <h1> Dashboard </h1> <ProductCards overview={products} />
        <hr />
        <CollectionsAndProductsPreview />
      </section>
    </>
  );
}

export default Dashboard;
