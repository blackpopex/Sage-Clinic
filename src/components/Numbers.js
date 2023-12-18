import React from "react";
import "./Numbers.css";
import CountUp from "react-countup";

function Numbers(props) {
  return (
    <>
      <div className="numbers">
        <h1 className="green-color">
          <CountUp
            start={0}
            end={props.h1Text}
            duration={6.75}
            useEasing={true}
          />
        </h1>
        <h6 className="light-green-color">{props.h6Text}</h6>
      </div>
    </>
  );
}

export default Numbers;
