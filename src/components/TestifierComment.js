import React from "react";
import "./TestifierComment.css";

function TestifierComment(props) {
  return (
    <>
      <div className="comment bg-grey">
        <p>{props.ptext}</p>
      </div>
    </>
  );
}

export default TestifierComment;
