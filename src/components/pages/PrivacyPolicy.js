import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";

function PrivacyPolicy() {
  return (
    <>
      <div className="Privacy_Policy">
        <Pagetitlesection pagetitle="Privacy Policy" />
      </div>
      <div className="container">
        <section>
          <div className="m-b3">
            <h4 className="light-green-color">Introduction</h4>
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has " />
          </div>
          <div className="m-b3">
            <h5 className="light-green-color">
              What personal information do we collect from the people that visit
              our website?
            </h5>
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has." />
          </div>
          <div className="m-b3">
            <h5 className="light-green-color">
              How do we use the information that we collect?
            </h5>
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has " />
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
