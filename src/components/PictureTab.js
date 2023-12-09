import React from "react";
import "./PictureTab.css";

function PictureTab(props) {
  return (
    <>
      <div className="pic-wrapper">
        <div>
          <img src={props.img} className="profile-photo" alt="photo_name" />
          <div className="content bg-light-green">
            <h4 className="green-color">{props.maintext}</h4>
            <h6 className="white-color">{props.text}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default PictureTab;
