import React, { useState } from "react";
import "./FaqAccordion.css";

function FaqAccordion(props) {
  const [click, setClass] = useState(false);
  const activateAccordion = () => setClass(!click);
  var accordionBTN = document.getElementsByClassName("accordion-btn");
  var p;

  for (p = 0; p < accordionBTN.length; p++) {
    accordionBTN[p].addEventListener("click", function () {
      this.classList.toggle("acc-activated");
      var myAccPanel = this.nextElementSibling;
      if (myAccPanel.style.maxHeight) {
        myAccPanel.style.maxHeight = null;
      } else {
        myAccPanel.style.maxHeight = myAccPanel.scrollHeight + "px";
      }
    });
  }
  return (
    <>
      <div className="faq-accoridion-wrapper">
        <h5
          className="light-green-color accordion-btn"
          onClick={activateAccordion}
        >
          {props.question}
        </h5>
        <div className="accordionpanel">
          <div className="content-wrapper">
            <p className="answers">{props.answer}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default FaqAccordion;
