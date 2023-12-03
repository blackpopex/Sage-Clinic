import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <>
      <button>{props.innertext}</button>
    </>
  );
}

export default Button;
