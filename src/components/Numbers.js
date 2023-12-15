import React from "react";
import "./Numbers.css";

function Numbers(props) {
  return (
    <>
      <div className="numbers">
        <h1 className="green-color">{props.h1Text}</h1>
        <h6 className="light-green-color">{props.h6Text}</h6>
      </div>
    </>
  );
}

export default Numbers;
