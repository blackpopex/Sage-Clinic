import React from "react";
import "./TestifyPhoto.css";

function TestifyPhoto(props) {
  return (
    <>
      <div className="photo-container">
        <img src={props.image} alt="tesifier-photo" className="patient-photo" />
        <div className="absolute-position">
          <h6 className="white-color">{props.htext}</h6>
        </div>
      </div>
    </>
  );
}

export default TestifyPhoto;
