import React from "react";
import { Icon } from "@iconify/react";

function DirectionBtn(props) {
  return (
    <>
      <button>
        {props.innertext}
        <Icon icon="fa6-solid:angle-right" id="angle-right" />
      </button>
    </>
  );
}

export default DirectionBtn;
