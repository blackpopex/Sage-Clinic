import React from "react";
import "./Box.css";

function GreenBox(props) {
  return (
    <>
      <div className="Box bg-green">
        <div className="box-content">
          <h3 className="light-green-color">{props.maintext}</h3>
          <h6 className="light-green-color"> {props.submaintext}</h6>
        </div>
      </div>
    </>
  );
}

export default GreenBox;
