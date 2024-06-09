import React, { useEffect } from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import PictureTab from "../PictureTab";
import Numbers from "../Numbers";
import Box from "../Box";
import AOS from "aos";
import "aos/dist/aos.css";
import "./OurStory.css";
import Unorderlist5 from "../Unorderlist5";

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
              <Paragraph ptext="Dr. Chikaike Nnamdi Moses, Medical Director, (MB.BS (1989), FAGP (2013), DFM (2017)) founded Sage Hospital, a two-storey secondary care facility with forty (40) beds that first opened in the heart of Warri, Delta State, Nigeria, in 2000. Presently, forty percent of the hospital's patient admissions come from villages, both inside and outside Warri area. In addition to numerous other amenities, the hospital houses a maternity ward, pediatrics, an intensive care unit, operating rooms, and clinical laboratories."></Paragraph>
              <Paragraph ptext="Sage Clinic has been a pioneer in disease detection and treatment for over eight years, putting it at the forefront of medical care. Above all, we want to offer every patient, both within and outside of our clinic, the best possible care and services."></Paragraph>
              <Paragraph ptext="There's no denying that quality matters when selecting a hospital for high-quality medical services. Additionally, the hundreds of patients who receive care from the medical staff at Sage Clinic and Maternity Centre every year can rest knowing that the facility has a century-long history of offering healthcare in a convenient setting."></Paragraph>
              <Paragraph ptext="We provide healthcare services to a wide range of patients, including locals, visiting dignitaries, and people from other states."></Paragraph>
              <Paragraph ptext="Our clinical expertise encompasses a wide range of specialties, such as all subspecialty in surgery, child and maternal health, subspecialties in internal medicine. "></Paragraph>
            </div>
            <div className="numbers-stat">
              <div className="flex-row">
                <div className="w-25">
                  <Numbers h1Text={12} h6Text="Doctors" />
                </div>
                <div className="w-25">
                  <Numbers h1Text={10200} h6Text="Patient Satisfied" />
                </div>
                <div className="w-25">
                  <Numbers h1Text={20} h6Text="Years Experience" />
                </div>
                <div className="w-25">
                  <Numbers h1Text={50} h6Text="Certified Nurses" />
                </div>
              </div>
            </div>

            <div className="first-section m-b3">
              <h4 className="green-color">Clinical Expertise</h4>
              <Paragraph ptext="Sage Clinic provides a wide range of services in one convenient location. Our hospital's doctors are renowned for their clinical proficiency in:"></Paragraph>
              <Unorderlist5
                list1="Cardiovascular care"
                list2="Emergency medicine"
                list3="Neurology and neurosurgery"
                list4="Obstetrics/gynecology"
                list5="Surgical cases (General Surgery, Urology and Orthopedics)"
              />
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
                <Paragraph ptext="Giving sacrificially to the welfare of others improves not only the lives of those in need but also our own. We contribute back to the community annually in an effort to promote health and guarantee that all patients have access to high-quality medical care. Some of the ways we give back to our community are listed below." />
              </div>
              <div className="community-service">
                <div className="flex-row">
                  <div className="w-25">
                    <PictureTab
                      img="/assets/images/comunity-services/img1.jpg"
                      maintext="Engage youth programs"
                      text="Our youth initiatives foster community integration and lay a solid foundation for multicultural awareness. "
                    />
                  </div>
                  <div className="w-25">
                    <PictureTab
                      img="/assets/images/comunity-services/img2.jpg"
                      maintext="Charity Care"
                      text="Charity care is the medically care we provide to those who cannot afford it, either for free or at a reduced cost. "
                    />
                  </div>
                  <div className="w-25 light-green-box">
                    <PictureTab
                      img="/assets/images/comunity-services/img3.jpg"
                      maintext="Take part in cleanups"
                      text="We partake in neighborhood cleanup, we believe that a clean neighborhood enhances everyone's quality of life."
                    />
                  </div>
                  <div className="w-25 green-box">
                    <PictureTab
                      img="/assets/images/comunity-services/img4.jpg"
                      maintext="Awareness Campaign"
                      text="Our health campaigns play a crucial role in helping patients prioritize their health, and build enduring relationships with us."
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
                  <p>
                    {" "}
                    Discover our all-inclusive health coverage at Sage Clinic
                    with approved plans; we handle the filing of claims for you.
                    For questions about insurance, please call{" "}
                    <b className="light-green-color">+234806 847 0299.</b>
                  </p>
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
