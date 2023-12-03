import React from "react";

function Unorderlist1(props) {
  return (
    <>
      <div className="wrapper m-tp2 unorderlist">
        <h5 className="light-green-color">{props.headingText}</h5>
        <ul>
          <li className="green-dot">{props.list1}</li>
        </ul>
      </div>
    </>
  );
}

export default Unorderlist1;
