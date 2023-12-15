import React from "react";
import "./ServicesBox.css";
import { Icon } from "@iconify/react";

function ServicesBox(props) {
  return (
    <>
      <div className="services_Box">
        <div className="box-wrapper">
          <Icon icon={props.iconifyIcon} className="iconify-icon ambulance" />
          <h6>{props.h6Text}</h6>
          <p>{props.pText}</p>
        </div>
      </div>
    </>
  );
}

export default ServicesBox;
