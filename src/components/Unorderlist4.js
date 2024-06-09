import React from "react";

function Unorderlist4(props) {
  return (
    <>
      <div className="wrapper m-tp2 unorderlist">
        <h5 className="light-green-color">{props.headingText}</h5>
        <ul>
          <li className="green-dot">{props.list1}</li>
          <li className="green-dot">{props.list2}</li>
          <li className="green-dot">{props.list3}</li>
          <li className="green-dot">{props.list4}</li>
        </ul>
      </div>
    </>
  );
}

export default Unorderlist4;
