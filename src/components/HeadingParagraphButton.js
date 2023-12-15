import React from "react";
import { Link } from "react-router-dom";

function HeadingParagraphButton(props) {
  return (
    <>
      <div className="heading-paragraph-text">
        <h1 className="h1Text">{props.headingText}</h1>
        <p className="pText">{props.paragraphText}</p>
        <Link to={props.Link}>
          <button className="button">{props.btnText}</button>
        </Link>
      </div>
    </>
  );
}

export default HeadingParagraphButton;
