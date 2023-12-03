import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Testnames from "../Testnames";

function Services() {
  return (
    <>
      <div className="Services-wrapper">
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
              <Testnames
                testAlphalbet="a"
                firstlink="Audiometry"
                secondlink="Anesthesiology & Perioperative"
              />
              <div className="faint-border-line"></div>
              <Testnames
                testAlphalbet="e"
                firstlink="Emergency Medicine"
                secondlink="Ear, Nose & Throat"
              />
              <div className="faint-border-line"></div>
              <Testnames testAlphalbet="i" firstlink="Immunization" />
              <div className="faint-border-line"></div>
              <Testnames testAlphalbet="l" firstlink="Laboratory" />
              <div className="faint-border-line"></div>

              <Testnames
                testAlphalbet="o"
                firstlink="Obstetrics and Gynecology"
              />
              <div className="faint-border-line"></div>
              <Testnames testAlphalbet="p" firstlink="Pharmacy" />

              <div className="faint-border-line"></div>

              <Testnames testAlphalbet="r" firstlink="Radiology" />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Services;
