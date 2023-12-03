import React from "react";
import "./Pagetitlesection.css";

function Pagetitlesection(props) {
  return (
    <section className="title-wrapper bg-grey">
      <div className="container">
        <h1 className="light-green-color">{props.pagetitle}</h1>
      </div>
    </section>
  );
}
export default Pagetitlesection;
