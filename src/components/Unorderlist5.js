import React from "react";

function Unorderlist5(props) {
  return (
    <>
      <div className="wrapper m-tp2 unorderlist">
        <ul>
          <li className="green-dot">{props.list1}</li>
          <li className="green-dot">{props.list2}</li>
          <li className="green-dot">{props.list3}</li>
          <li className="green-dot">{props.list4}</li>
          <li className="green-dot">{props.list5}</li>
        </ul>
      </div>
    </>
  );
}

export default Unorderlist5;
