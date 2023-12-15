import React from "react";
import "./Reasontab.css";

function Reasontab(props) {
  return (
    <>
      <div className="Reason-tab-wrapper">
        <div className="tab-content bg-white">
          <div className="flex">
            <div className="width-20">
              <div className="absolute-box">
                <div className="flex">
                  <h4>{props.h4Text}</h4>
                  <h6>{props.h6Text}</h6>
                </div>
              </div>
            </div>
            <div className="width-80">
              <div className="short-story">
                <h5>{props.h5Text}</h5>
                <p>{props.pText}</p>
                <a href="#/" className="light-green-color">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reasontab;
