import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import "./Testimonies.css";
import Paragraph from "../Paragraph";
import TestifierComment from "../TestifierComment";
import TestifyPhoto from "../TestifyPhoto";

function Testimonies() {
  return (
    <>
      <Pagetitlesection pagetitle="Testimonies" />
      <section>
        <div className="container">
          <div>
            <h1 className="green-color testifier-header-text">
              Our Patient Stories
            </h1>
            <Paragraph ptext="Hear inspiring tales of actual Sage Clinic Patient" />
          </div>
          <div className="testifiers">
            <div className="row flex">
              <div className="col-70">
                <TestifierComment ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " />
              </div>
              <div className="col-30">
                <TestifyPhoto
                  image="/assets/images/family.jpg"
                  htext="Daniels Phils"
                />
              </div>
            </div>
            <div className="faint-border-line from-left"></div>
            <div className="row flex">
              <div className="col-30">
                <TestifyPhoto
                  image="/assets/images/pexels-christina-morillo-1181519(1).jpg"
                  htext="Daniels Phils"
                />
              </div>
              <div className="col-70 odd-comment">
                <TestifierComment ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
              </div>
            </div>
            <div className="faint-border-line from-right"></div>
            <div className="row flex">
              <div className="col-70">
                <TestifierComment ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. " />
              </div>
              <div className="col-30">
                <TestifyPhoto
                  image="/assets/images/images3.jpg"
                  htext="James Brown"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonies;
