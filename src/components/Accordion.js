import React, { useState } from "react";
import Roundphoto from "./Roundphoto";
import "./Accordion.css";

function Accordion(props) {
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
      <div className="accoridion-wrapper">
        <h4
          className="light-green-color accordion-btn"
          onClick={activateAccordion}
        >
          {props.h4text}
        </h4>
        <div className="accordionpanel">
          <div className="content-wrapper">
            <div className="split">
              <div className="width-35">
                <Roundphoto
                  image="/assets/images/profile/k3.jpg"
                  h5text="katrin Stewart"
                  h6text="Medical Director"
                  profiledetails="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book."
                />
              </div>
              <div className="width-35 slide-left">
                <Roundphoto
                  image="/assets/images/profile/k7.jpg"
                  h5text="Dr. Jimmy K"
                  h6text="Gynaecologist"
                  profiledetails="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book."
                />
              </div>
            </div>
            <div className="align-center">
              <div className="width-35">
                <Roundphoto
                  image="/assets/images/profile/k6.jpg"
                  h5text="katrin Stewart"
                  h6text="Medical Director"
                  profiledetails="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book."
                />
              </div>
            </div>
            <div className="split">
              <div className="width-35">
                <Roundphoto
                  image="/assets/images/profile/k4.jpg"
                  h5text="katrin Stewart"
                  h6text="Medical Director"
                  profiledetails="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book."
                />
              </div>
              <div className="width-35 slide-left">
                <Roundphoto
                  image="/assets/images/profile/k2.jpg"
                  h5text="katrin Stewart"
                  h6text="Medical Director"
                  profiledetails="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Accordion;
