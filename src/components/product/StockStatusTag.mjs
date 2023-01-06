import React from "react";

const tagInfo = {
  OK: { bg: "#28B463", border: "1px solid #ABEBC6", text: "OK" },
  Low: { bg: "#F1C40F", border: "1px solid #F7DC6F", text: "Low" },
  Zero: { bg: "#E74C3C", border: "1px solid #F1948A", text: "Zero" },
};
function StatusTag(props) {
  return (
    <div className="col-lg-1 col-md-2 col-sm-2 col-xs-1 p-1 text-center">
      <p
        className="rounded p-1 text-white"
        style={{
          backgroundColor: props.info.bg,
          border: props.info.border,
        }}
      >
        {" "}
        {props.info.text}
      </p>{" "}
    </div>
  );
}
export default function StockStatusTags(props) {
  console.log(props);
  return <StatusTag info={tagInfo[props.status]} />;
}
