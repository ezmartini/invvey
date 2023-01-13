import React, { useState } from "react";

export default function EditStock(props) {
  const [stock, setStock] = useState(props.quantity);

  async function handleSave(stock) {
    await props.saveStock(stock);
  }
  return (
    <td>
      {" "}
      <form className="row">
        <input
          className="form-control col-lg-3 col-md-3 col-sm-3 ml-4 text-center gy-0 gx-0 mx-0"
          onChange={(e) => setStock(e.target.value)}
          placeholder={props.quantity}
          required
          min={0}
        />{" "}
        <p className="ml-2 col-lg-3 col-md-2 col-sm-2"> units </p>
        <p
          onClick={(e) => handleSave(stock)}
          className="text-success col-lg-1 col-md-1 col-sm-1 ml-2 text-center"
        >
          {" "}
          <u> Save </u>
        </p>
      </form>
    </td>
  );
}
