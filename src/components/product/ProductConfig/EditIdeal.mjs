import React from "react";
import { useState } from "react";

export default function EditIdeal(props) {
  const [stock, setStock] = useState(props.quantity);
  function changeStock(value) {
    setStock(value);
  }

  function handleSave() {
    // api call to change config here
  }

  return (
    <td>
      {" "}
      <form className="row">
        <input
          className="form-control col-lg-3 col-md-3 col-sm-3 ml-4 text-center gy-0 gx-0 mx-0"
          onChange={(e) => changeStock(e.target.value)}
          placeholder={props.quantity}
        />{" "}
        <p className="ml-2"> units </p>
        <p
          onClick={handleSave}
          className="text-success col-lg-1 col-md-1 col-sm-1 ml-2 text-center"
        >
          {" "}
          <u> Save </u>
        </p>
      </form>
    </td>
  );
}
