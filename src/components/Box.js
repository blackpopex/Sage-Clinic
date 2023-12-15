import React from "react";
import "./Box.css";

function Box(props) {
  return (
    <>
      <div className="Box bg-grey">
        <h5 className="green-color">{props.h3Text}</h5>
      </div>
    </>
  );
}

export default Box;
