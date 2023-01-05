import { Link } from "react-router-dom";
import { useState } from "react";

function CollectionsAndProducts() {
  function DisplayCollections() {
    return <h1> Hiii </h1>;
  }

  return (
    <>
      {" "}
      <h3 className="mt-4">
        {" "}
        Products & Collections for House of Beauty{" "}
      </h3>{" "}
      <ul className="nav nav-tabs">
        {" "}
        <li className="nav-item">
          <a className="nav-link" href="#">
            Collections
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Products
          </a>
        </li>
      </ul>
    </>
  );
}

function ProductCard(props) {
  const cardBreakpoints = "col-lg-4 col-md-4 col-sm-12 ";
  const borderPrefix = "border border-";
  const iconPrefix = "bi bi-";
  const textPrefix = "text-";

  return (
    <>
      {" "}
      <div
        className={
          cardBreakpoints +
          "mb-2 " +
          textPrefix +
          props.borderPostfix +
          " product-card"
        }
      >
        <div
          className={"card text-center " + borderPrefix + props.borderPostfix}
          id={props.type}
        >
          {" "}
          <div className="card-body mt-1">
            <div style={{ fontSize: "20px" }}>
              <i class={iconPrefix + props.iconPostfix}></i>
            </div>
            <h3 className="card-title mb-0"> {props.title}</h3>
            <h4 className="card-title"> ({props.number})</h4>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}
function ProductCards() {
  // set states for numbers on each card here (3x api calls)
  return (
    <>
      {" "}
      <section>
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
function Dashboard() {
  return (
    <>
      <section className="container mt-4">
        {" "}
        <h1> Dashboard </h1> {ProductCards()} {CollectionsAndProducts()}
      </section>
    </>
  );
}

export default Dashboard;
