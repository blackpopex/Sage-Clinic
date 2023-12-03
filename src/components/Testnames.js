import React from "react";
import "./Testnames.css";

function Testnames(props) {
  return (
    <div className="test-wrapper">
      <div className="flex-colum">
        <h1 className="green-color">{props.testAlphalbet}</h1>
        <ul className="test-links">
          <li className="light-green-color">{props.firstlink}</li>
          <li className="light-green-color">{props.secondlink}</li>
        </ul>
      </div>
    </div>
  );
}

export default Testnames;
