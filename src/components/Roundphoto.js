import React from "react";
import "./Roundphoto.css";
import { Icon } from "@iconify/react";

function Roundphoto(props) {
  return (
    <>
      <div className="round_photo-wrapper">
        <div className="photo-content">
          <img src={props.image} className="staffphoto" alt="photo" />
          <div className="abt-pos">
            <h5 className="h5-text light-green-color">{props.h5text}</h5>
            <h6 className="h6-text white-color">{props.h6text}</h6>
          </div>
        </div>
        <div className="profile-details">
          <div>
            <h5 className="green-color">
              <Icon icon="ph:phone-fill" className="phone" /> +234(806) 847 0244
            </h5>
            <div className="faint-border-line2"></div>
            <p>{props.profiledetails}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Roundphoto;
