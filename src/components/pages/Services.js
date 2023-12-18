import React, { useEffect } from "react";
import Pagetitlesection from "../Pagetitlesection";
import Testnames from "../Testnames";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Services-wrapper section-header-margin-top ">
        <Pagetitlesection pagetitle="Department & Services" />
        <div className="container">
          <section>
            <h3 className="green-color spec-width">
              Sage Clinic is where your optima treatment begins.
            </h3>
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley
            </p>
            <div className="listed-services">
              <div data-aos="fade-up" data-aos-duration="3100">
                <Testnames
                  testAlphalbet="a"
                  firstlink="Audiometry"
                  secondlink="Anesthesiology & Perioperative"
                />
              </div>
              <div className="faint-border-line"></div>
              <div data-aos="fade-right" data-aos-duration="1400">
                <Testnames
                  testAlphalbet="e"
                  firstlink="Emergency Medicine"
                  secondlink="Ear, Nose & Throat"
                  data-aos="fade-right"
                  data-aos-duration="900"
                />
              </div>
              <div className="faint-border-line"></div>
              <div data-aos="fade-right" data-aos-duration="1200">
                <Testnames testAlphalbet="i" firstlink="Immunization" />
              </div>
              <div className="faint-border-line"></div>
              <div data-aos="fade-right" data-aos-duration="1000">
                <Testnames testAlphalbet="l" firstlink="Laboratory" />
              </div>
              <div className="faint-border-line"></div>

              <div data-aos="fade-right" data-aos-duration="900">
                <Testnames
                  testAlphalbet="o"
                  firstlink="Obstetrics and Gynecology"
                />
              </div>
              <div className="faint-border-line"></div>
              <div data-aos="fade-right" data-aos-duration="800">
                <Testnames testAlphalbet="p" firstlink="Pharmacy" />
              </div>

              <div className="faint-border-line"></div>

              <div data-aos="fade-right" data-aos-duration="700">
                <Testnames testAlphalbet="r" firstlink="Radiology" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Services;
