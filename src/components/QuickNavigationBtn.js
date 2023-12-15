import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./QuickNavigationBtn.css";

function QuickNavigationBtn(props) {
  return (
    <>
      <Link to={props.Link}>
        <button className="navigationBTN">
          <Icon icon={props.iconifyIcon} className="iconify-icon calender" />
          {props.btnText}
          <Icon icon={props.arrowIcon} className="iconify-icon  arrow-right" />
        </button>
      </Link>
    </>
  );
}

export default QuickNavigationBtn;
