import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import Unorderlist2 from "../Unorderlist2";
import { Icon } from "@iconify/react";
import "./MissionVisionValues.css";
import Unorderlist1 from "../Unorderlist1";
import Unorderlist3 from "../Unorderlist3";

function MissionVisionValues() {
  return (
    <>
      <div className="Key_statement_wrapper section-header-margin-top ">
        <Pagetitlesection pagetitle="Mission, Vision & Values" />
        <div className="container">
          <section className="introductory-pararaph">
            <h3 className="green-color">Key Statements</h3>
            <Paragraph ptext="The key statements of a healthcare provider aid in defining their goals and guiding them in providing their patients with the quality of care they need." />
            <Paragraph ptext="Our mission, vision, and values, as well as the reasons Sage Clinic has been in operation for more than 20 years, are communicated in our core statements. They serve as the connection that binds us all together." />
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
                  <Unorderlist1 list1="Our goal is to deliver patient-centered healthcare that is exceptional in terms of quality, service, and accessibility while maintaining our integrity and evolving as needed to better serve our patients." />
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
                    list1="Regardless of a person's race, age, language, or religion, our vision is to offer them an exceptional patient experience."
                    list2="Our community's goal is for everyone to have a healthier lifestyle, earn the trust of patients by being agents of positive change who, in turn, inspire hope for humanity."
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
                  <Unorderlist3
                    list1="The patient is the main priority at all times. Patient care is our primary focus."
                    list2="We listen with compassion. We pay attention to the problems that our patients are facing, we respect them, and we try our best to assist."
                    list3="We believe that patients deserve to have timely access to health care and that our systems should reflect this value. "
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
