import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import GreenBox from "../GreenBox";
import GreyBox from "../GreyBox";
import LightGreenBox from "../LightGreenBox";
import "./OurStory.css";
import PictureTab from "../PictureTab";

function OurStory() {
  return (
    <>
      <div className="Our_story">
        <Pagetitlesection pagetitle="Our Story" />
        <section>
          <div className="container">
            <div className="first-section m-b3">
              <h1 className="green-color">Our Humble Begining</h1>
              <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></Paragraph>
            </div>

            <div className="box-right m-b2 width-70">
              <h4 className="green-color">Milestone Overcome</h4>
              <Paragraph
                ptext="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's"
              />
              <div className="flex-row m-tp">
                <GreenBox maintext="1978" submaintext="Found of the Hospital" />
                <LightGreenBox
                  maintext="1978"
                  submaintext="Found of the Hospital"
                />
                <GreyBox maintext="1978" submaintext="Found of the Hospital" />
              </div>
            </div>
          </div>
          <div className="faint-border-line from-left"></div>
          <div className="container">
            <div className="box-left m-b2 width-70">
              <h4 className="green-color">Awards & Accreditation</h4>
              <Paragraph
                ptext="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's"
              />
              <div className="flex-row m-tp">
                <GreyBox maintext="1978" submaintext="Found of the Hospital" />
                <LightGreenBox
                  maintext="1978"
                  submaintext="Found of the Hospital"
                />
                <GreenBox maintext="1978" submaintext="Found of the Hospital" />
              </div>
            </div>
          </div>
          <div className="faint-border-line from-right"></div>
          <div className="container">
            <div className="box-right m-b2 width-70">
              <h4 className="green-color">Support HMO/Insurance</h4>
              <Paragraph
                ptext="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's"
              />
              <div className="flex-row m-tp">
                <GreenBox maintext="1978" submaintext="Found of the Hospital" />
                <LightGreenBox
                  maintext="1978"
                  submaintext="Found of the Hospital"
                />
                <GreyBox maintext="1978" submaintext="Found of the Hospital" />
              </div>
            </div>
            <div className="faint-border-line center"></div>
          </div>
          <div className="board-members-wrapper m-tp3">
            <div className="container">
              <div className="board-of-directors">
                <h3 className="green-color">Our Board of Directors</h3>
                <Paragraph
                  ptext="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's"
                />

                <div className="board-members">
                  <div className="flex-row m-tp3">
                    <PictureTab />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OurStory;
