import React from "react";
import "./Box.css";

function GreyBox(props) {
  return (
    <>
      <div className="Box bg-grey">
        <div className="box-content">
          <h3 className="green-color">{props.maintext}</h3>
          <h6 className="green-color"> {props.submaintext}</h6>
        </div>
      </div>
    </>
  );
}

export default GreyBox;
