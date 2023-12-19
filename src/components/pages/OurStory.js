import React, { useEffect } from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import PictureTab from "../PictureTab";
import Numbers from "../Numbers";
import Box from "../Box";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurStory.css";

function OurStory() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Our_story section-header-margin-top ">
        <Pagetitlesection pagetitle="Our Story" />
        <section>
          <div className="container">
            <div className="first-section m-b3">
              <h1 className="green-color">Our Humble Begining</h1>
              <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></Paragraph>
            </div>
            <div className="numbers-stat">
              <div className="flex-row">
                <div className="w-25">
                  <Numbers h1Text={180} h6Text="Doctors" />
                </div>
                <div className="w-25">
                  <Numbers h1Text={3200} h6Text="Patient Satisfied" />
                </div>
                <div className="w-25">
                  <Numbers h1Text={30} h6Text="Years Experience" />
                </div>
                <div className="w-25">
                  <Numbers h1Text={100} h6Text="Certified Nurses" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green inset-box">
          <div className="flex">
            <div className="col-40 bg-green">
              <div className="container">
                <div className="absolute-text">
                  <div className="content">
                    <h6 className="light-green-color">Our Approach</h6>
                    <h1
                      className="white-color"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      Is the Powerful Bond, Between Us and Our Patient
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-60">
              <img
                src="/assets/images/doctorandpatient.png"
                alt="Doctor and Patient"
                className="doctor_patient"
              />
            </div>
          </div>
          <div className="green-fade"></div>
        </section>
        <section>
          <div className="container">
            <div className="awards-wrapper">
              <h3 className="text-center green-color">
                Awards & Accreditation
              </h3>
              <div
                className="flex-row m-tp3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="w-25">
                  <img
                    src="/assets/images/awards/icon1.jpg"
                    className="awards"
                    alt="Award"
                  />
                </div>
                <div className="w-25">
                  <img
                    src="/assets/images/awards/icon2.jpg"
                    className="awards"
                    alt="Award"
                  />
                </div>
                <div className="w-25">
                  <img
                    src="/assets/images/awards/icon3.jpg"
                    className="awards"
                    alt="Award"
                  />
                </div>
                <div className="w-25">
                  <img
                    src="/assets/images/awards/icon5.jpg"
                    className="awards"
                    alt="Award"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-grey serving-the-comunity">
          <div className="container">
            <div className="container-wrapper">
              <div className="main-text-wrapper">
                <h6 className="green-color">We Serve the Community by</h6>
                <h3 className="light-green-color">
                  Giving Back to The Society
                </h3>
                <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" />
              </div>
              <div className="community-service">
                <div className="flex-row">
                  <div className="w-25">
                    <PictureTab
                      img="/assets/images/comunity-services/img1.jpg"
                      maintext="Activity 1"
                      text="Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply "
                    />
                  </div>
                  <div className="w-25">
                    <PictureTab
                      img="/assets/images/comunity-services/img2.jpg"
                      maintext="Activity 2"
                      text="Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply "
                    />
                  </div>
                  <div className="w-25 light-green-box">
                    <PictureTab
                      img="/assets/images/comunity-services/img3.jpg"
                      maintext="Activity 3"
                      text="Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply"
                    />
                  </div>
                  <div className="w-25 green-box">
                    <PictureTab
                      img="/assets/images/comunity-services/img4.jpg"
                      maintext="Activity 4"
                      text="Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="serving-the-comunity">
          <div className="container">
            <div className="support-hmo-insurance">
              <h3 className="green-color text-center">
                Supported HMO/Insurance
              </h3>
              <div className="flex">
                <div className="col-40">
                  <h4 className="light-green-color small-width">
                    We support major health insurance company
                  </h4>
                  <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                </div>
                <div className="col-60">
                  <div className="hmo-insurance">
                    <div className="flex">
                      <Box h3Text="Novo Health" />
                      <Box h3Text="Hygeia" />
                      <Box h3Text="SHT" />
                    </div>
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
