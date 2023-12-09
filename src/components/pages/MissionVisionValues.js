import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import Unorderlist2 from "../Unorderlist2";
import { Icon } from "@iconify/react";
import "./MissionVisionValues.css";

function MissionVisionValues() {
  return (
    <>
      <div className="Key_statement_wrapper">
        <Pagetitlesection pagetitle="Mission, Vision & Values" />
        <div className="container">
          <section>
            <h3 className="green-color">Key Statements</h3>
            <Paragraph ptext="A healthcare provider's mission, vision, and values statements help them determine exactly what they want to accomplish and how they can give their patients the kind of treatment they deserve.A healthcare provider's mission, vision, and values statements help them determine exactly what they want to accomplish and how they can give their patients the kind of treatment they deserve." />
          </section>
          <section>
            <div className="mission_vision_values">
              <div className="row flex mission-row">
                <div className="col-30">
                  <div className="bg-green box">
                    <div>
                      <h4 className="light-green-color">Our Mission</h4>
                      <Icon icon="octicon:goal-24" id="goal" />
                    </div>
                  </div>
                </div>
                <div className="col-70">
                  <Unorderlist2
                    list1="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                    list2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an "
                  />
                </div>
              </div>
              <div className="row flex vision-row">
                <div className="col-50">
                  <div className="bg-grey box">
                    <div>
                      <h4 className="green-color">Our Vison</h4>
                      <Icon icon="pajamas:eye" id="eye" />
                    </div>
                  </div>
                </div>
                <div className="col-50">
                  <Unorderlist2
                    list1="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                    list2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an "
                  />
                </div>
              </div>
              <div className="row flex value-row">
                <div className="col-30">
                  <div className="bg-light-green box">
                    <div>
                      <h4 className="green-color">Our Values</h4>
                      <Icon icon="vaadin:scale" id="value" />
                    </div>
                  </div>
                </div>
                <div className="col-70">
                  <Unorderlist2
                    list1="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                    list2="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an "
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MissionVisionValues;
