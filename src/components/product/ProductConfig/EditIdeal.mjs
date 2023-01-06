import React from "react";
import { useState } from "react";

export default function EditIdeal(props) {
  const [stock, setStock] = useState(props.quantity);
  function changeStock(value) {
    setStock(value);
  }

  return (
    <td>
      {" "}
      <form className="row">
        <input
          className="form-control col-lg-3 col-md-3 col-sm-4 text-center gy-0 gx-0 mx-0"
          onChange={(e) => changeStock(e.target.value)}
          placeholder={props.quantity}
        />{" "}
      </form>
    </td>
  );
}
