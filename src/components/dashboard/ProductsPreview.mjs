import ProductTable from "../product-table/ProductTable.mjs";
function ProductsPreview(props) {
  return <ProductTable toDisplay={props.toDisplay} />;
}

export default ProductsPreview;
