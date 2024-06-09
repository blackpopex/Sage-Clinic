import React, { useEffect } from "react";
import HeadingParagraphButton from "../HeadingParagraphButton";
import QuickNavigationBtn from "../QuickNavigationBtn";
import Paragraph from "../Paragraph";
import "./Home.css";
import ServicesBox from "../ServicesBox";
import Button from "../Button";
import { Link } from "react-router-dom";
import PictureTab from "../PictureTab";
import Reasontab from "../Reasontab";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="Hero-section section-header-margin-top ">
        <div className="hero-section-wrapper">
          <div className="container">
            <HeadingParagraphButton
              headingText="Welcome To Sage Clinic"
              paragraphText="We are Nigeria's top private tertiary care organization, constantly putting the needs of our patients first and offering top-notch healthcare services."
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
                  paragraphText="Dr. Chikaike Nnamdi Moses, Medical Director, (MB.BS (1989), FAGP (2013), DFM (2017)) founded Sage Hospital, a two-storey secondary care facility with forty (40) beds that first opened in the heart of Warri, Delta State, Nigeria, in 2000. Presently, forty percent of the hospital's patient admissions come from villages, both inside and outside Warri area."
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
                      Link="/Direction"
                      btnText="Get Driving Direction"
                      arrowIcon="ep:arrow-right"
                    />
                  </div>
                  <div className="bg-light-green-btn">
                    <QuickNavigationBtn
                      iconifyIcon="clarity:email-solid"
                      Link="/Contact"
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
            <Paragraph ptext="We collaborate with leading clinical leaders to provide outstanding patient experiences because we recognize that being a national leader in healthcare requires more than just medical knowledge—it takes a lot of heart. In addition to offering medical, obstetrics & gynecological services, we also offer a 24 hours emergency care services from licensed doctors." />
            <Paragraph ptext="We are accredited to provide primary and secondary health care delivery by NHIA and private HMOS. " />

            <div className="Services-displayed">
              <div className="flex">
                <div className="box bg-white ">
                  <ServicesBox
                    iconifyIcon="game-icons:ambulance"
                    h6Text="Ambulance"
                    pText="With its advanced life support apparatus, our ambulance can offer a range of emergency services, including ground transportation to our hospital location."
                  />
                </div>
                <div className="box bg-light-green ">
                  <ServicesBox
                    iconifyIcon="mdi:patient-outline"
                    h6Text="OutPatient"
                    pText="All medical consultations, procedures, and treatments, which are provided without requiring an overnight stay at a hospital, are referred to as outpatient care."
                  />
                </div>
                <div className="box bg-green">
                  <ServicesBox
                    iconifyIcon="medical-icon:i-surgery"
                    h6Text="Surgery"
                    pText="At Sage Clinic we offer worldwide recognized, skilled, highly trained, and empathetic surgical care. Our success rate is over 99.9%, trial will absolutely convince you."
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
                      <tr data-aos="fade-up" data-aos-duration="3100">
                        <th>Gynaecology</th>
                        <td>Monday 9:00am - 5:00pm</td>
                      </tr>
                      <tr data-aos="fade-up" data-aos-duration="3000">
                        <th>Ante-Natal</th>
                        <td>Tuesday 9:00am - 5:00pm</td>
                      </tr>
                      <tr data-aos="fade-up" data-aos-duration="2800">
                        <th>Immunization</th>
                        <td>Wednesday 9:00am - 5:00pm</td>
                      </tr>
                      <tr data-aos="fade-up" data-aos-duration="2500">
                        <th>Echocardiography</th>
                        <td>Thursday 9:00am - 5:00pm</td>
                      </tr>
                      <tr data-aos="fade-up" data-aos-duration="2200">
                        <th>Ultrasound</th>
                        <td>Friday 9:00am - 5:00pm</td>
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
                    maintext="My wonderful experience receiving medical attention and gracious hospitality from Sage Clinic"
                    text="I recently had the pleasure of visiting Sage Clinic and I must say, I was blown away by the entire experience. From the moment I walked in, I was greeted with several smiles from the staff, creating a warm and welcoming atmosphere. The serene environment of the clinic added to the overall beauty of the place, making it a calming and peaceful space. The doctors at Sage Clinic are not only experienced and knowledgeable, but also kindhearted and polite. They took the time to listen to my concerns and provided me with the best possible care. I felt like I was in good hands throughout my entire visit. I cannot thank the team at Sage Clinic enough for their exceptional service. It is clear that they truly care about their patients and go above and beyond to ensure their well-being. I highly recommend Sage Clinic to anyone in need of medical care. Thank you for providing such a wonderful experience."
                  />
                </div>
              </div>
              <div className="col-50">
                <div className="why-choose-us">
                  <h6 className="light-green-color">Three Reasons Why</h6>
                  <h3 className="green-color">You Should Choose Us</h3>

                  <div className="Reasons">
                    <div
                      className="green-bg-number-tag"
                      data-aos="fade-up"
                      data-aos-duration="2800"
                    >
                      <Reasontab
                        h4Text="1"
                        h6Text="One"
                        h5Text="Emergency"
                        pText="To oversee our emergency aid services, we have experienced medical personnel. 365 days a year, 24 hours a day."
                      />
                    </div>
                    <div
                      className="light-green-bg-number-tag"
                      data-aos="fade-up"
                      data-aos-duration="2500"
                    >
                      <Reasontab
                        h4Text="2"
                        h6Text="Two"
                        h5Text="Quality Standards"
                        pText="Providing complete patient care is what keeps us moving forward in our mission to make the faces of those in need happier."
                      />
                    </div>
                    <div
                      className="green-bg-number-tag"
                      data-aos="fade-up"
                      data-aos-duration="2200"
                    >
                      <Reasontab
                        h4Text="3"
                        h6Text="Three"
                        h5Text="Specialized Doctors"
                        pText="With advanced training in a range of specialization areas, our group comprises specialists who hold national certifications."
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
