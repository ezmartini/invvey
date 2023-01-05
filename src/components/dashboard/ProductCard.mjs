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
              <i className={iconPrefix + props.iconPostfix}></i>
            </div>
            <h3 className="card-title mb-0"> {props.title}</h3>
            <h4 className="card-title"> ({props.number})</h4>
          </div>{" "}
        </div>
      </div>{" "}
    </>
  );
}

export default ProductCard;
