import ProductCards from "../components/dashboard/ProductCards.mjs";
import CollectionsAndProductsPreview from "../components/dashboard/CollectionsAndProductsPreview.mjs";
import Navbar from "../components/navbar/Navbar.mjs";

function Dashboard() {
  return (
    <>
      <Navbar />
      <section className="container mt-3">
        {" "}
        <h1> Dashboard </h1> <ProductCards />
        <hr />
        <CollectionsAndProductsPreview />
      </section>
    </>
  );
}

export default Dashboard;
