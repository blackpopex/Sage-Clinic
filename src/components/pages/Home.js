import React from "react";
import HeadingParagraphButton from "../HeadingParagraphButton";
import QuickNavigationBtn from "../QuickNavigationBtn";
import Paragraph from "../Paragraph";
import "./Home.css";
import ServicesBox from "../ServicesBox";
import Button from "../Button";
import { Link } from "react-router-dom";
import PictureTab from "../PictureTab";
import Reasontab from "../Reasontab";

function Home() {
  return (
    <>
      <section className="Hero-section section-header-margin-top ">
        <div className="hero-section-wrapper">
          <div className="container">
            <HeadingParagraphButton
              headingText="Welcome To Sage Clinic"
              paragraphText="We are a consistently patient-first, world-class healthcare service provider and the leading private tertiary care organization in Nigeria."
              btnText="Explore"
              Link="/Services"
            />
          </div>
        </div>
      </section>
      <section className="Introduction-section">
        <div className="Introduction-wrapper">
          <div className="container">
            <div className="flex">
              <div className="col-60">
                <HeadingParagraphButton
                  headingText="An excellent option for your medical care!"
                  paragraphText="Sage Clinic Limited was founded on January 4th, 1978 by Dr. John E.O Amadasun, Dr. Med, FA (ORL), FWACS, FMC (ORL), FICS, MNES, Life-time Member, Nigerian Medical Association (NMA), and his Swiss wife- Mrs. Gratia Amadasun. The day before this memorable day, he had resigned from the government’s employ. "
                  btnText="Read More"
                  Link="/OurStory"
                />
              </div>
              <div className="col-40">
                <div className="absolute-grp-btn">
                  <div className="bg-green-btn">
                    <QuickNavigationBtn
                      iconifyIcon="simple-line-icons:calender"
                      Link="/BookAppointment"
                      btnText="Request Appointment"
                      arrowIcon="ep:arrow-right"
                    />
                  </div>
                  <div className="bg-light-green-btn">
                    <QuickNavigationBtn
                      iconifyIcon="solar:phone-bold"
                      Link="/"
                      btnText="2348068470244"
                      arrowIcon="ep:arrow-right"
                    />
                  </div>
                  <div className="bg-light-green-btn">
                    <QuickNavigationBtn
                      iconifyIcon="mdi:map-marker"
                      Link="/BookAppointment"
                      btnText="Get Driving Direction"
                      arrowIcon="ep:arrow-right"
                    />
                  </div>
                  <div className="bg-light-green-btn">
                    <QuickNavigationBtn
                      iconifyIcon="clarity:email-solid"
                      Link="/Contack"
                      btnText="Leave a Message"
                      arrowIcon="ep:arrow-right"
                    />
                  </div>
                  <div className="bg-light-green-btn">
                    <QuickNavigationBtn
                      iconifyIcon="fluent:people-team-16-filled"
                      Link="/Career"
                      btnText="Joint Our Team"
                      arrowIcon="ep:arrow-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Our-Services-section bg-grey">
        <div className="Our-Services-wrapper">
          <div className="container">
            <h6 className="green-color">Some of Our</h6>
            <h3 className="light-green-color">Key Services</h3>
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

            <div className="Services-displayed">
              <div className="flex">
                <div className="box bg-white ">
                  <ServicesBox
                    iconifyIcon="game-icons:ambulance"
                    h6Text="Ambulance"
                    pText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                  />
                </div>
                <div className="box bg-light-green ">
                  <ServicesBox
                    iconifyIcon="mdi:patient-outline"
                    h6Text="OutPatient"
                    pText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                  />
                </div>
                <div className="box bg-green">
                  <ServicesBox
                    iconifyIcon="medical-icon:i-surgery"
                    h6Text="Surgery"
                    pText="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Explore-section bg-green">
        <div className="Explore-section-wrapper">
          <div className="container">
            <h6 className="light-green-color">Find Out</h6>
            <h3 className="white-color about">About Our</h3>
            <div className="scheduled-events">
              <div className="flex">
                <div className="col-40">
                  <div className="supported-insurance">
                    <h3 className="circular-number bg-white">1</h3>
                    <h6 className="white-color">Supported Insurance</h6>

                    <div className="paragraph">
                      <Paragraph ptext="Sage Clinic accepts most health insurance plans, including RedCare, Hygeia, Avon, SHT, Medexia and many more." />
                      <Link to="/">
                        <Button innertext="Read More" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-60">
                  <div className="clinic-days">
                    <h3 className="circular-number bg-light-green">2</h3>
                    <h6 className="light-green-color">Clinic Days</h6>

                    <table>
                      <tr>
                        <th>Gynaecology</th>
                        <td>Monday 9:00am - 5:00pm</td>
                      </tr>
                      <tr>
                        <th>Ante-Natal</th>
                        <td>Monday 9:00am - 5:00pm</td>
                      </tr>
                      <tr>
                        <th>Immunization</th>
                        <td>Monday 9:00am - 5:00pm</td>
                      </tr>
                      <tr>
                        <th>Echocardiography</th>
                        <td>Monday 9:00am - 5:00pm</td>
                      </tr>
                      <tr>
                        <th>Ultrasound</th>
                        <td>Monday 9:00am - 5:00pm</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Reason-why-choose-us">
        <div className="Reason-why-choose-us-section-wrapper">
          <div className="container">
            <div className="flex flex-colum-768">
              <div className="col-50">
                <div className="image-text-wrapper">
                  <PictureTab
                    img="/assets/images/woman-smilling.jpg"
                    maintext="Respiratory therapy: a young, but highly valued profession at IU Health"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
                  />
                </div>
              </div>
              <div className="col-50">
                <div className="why-choose-us">
                  <h6 className="light-green-color">Three Reasons Why</h6>
                  <h3 className="green-color">You Should Choose Us</h3>

                  <div className="Reasons">
                    <div className="green-bg-number-tag">
                      <Reasontab
                        h4Text="1"
                        h6Text="One"
                        h5Text="Moms Heal Together Group (In Person)"
                        pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                      />
                    </div>
                    <div className="light-green-bg-number-tag">
                      <Reasontab
                        h4Text="2"
                        h6Text="Two"
                        h5Text="Moms Heal Together Group (In Person)"
                        pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                      />
                    </div>
                    <div className="green-bg-number-tag">
                      <Reasontab
                        h4Text="3"
                        h6Text="Three"
                        h5Text="Moms Heal Together Group (In Person)"
                        pText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
