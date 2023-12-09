import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import DirectionBtn from "../DirectionBtn";
import "./Direction.css";

function Direction() {
  return (
    <>
      <div className="Map_and_direction">
        <Pagetitlesection pagetitle="Map & Direction" />
        <div className="container">
          <section>
            <h3 className="green-color spec-width">
              Direction to Sage Clinic and Maternity
            </h3>
            <p>
              We know that hospitals can be confusing and finding your way
              around can be difficult, so please do ask for help.
            </p>
            <p>
              To find directions to Sage Clinic in Warri, Delta State, see the
              map below.
            </p>

            <div className="m-tp2">
              <h5>Sage Clinic & Maternity Center</h5>
              <p>2025 M Street, Northwest,</p>
              <p>Washington, DC, 20036</p>
              <p>
                <b>Phone:</b> 702-835-9700
              </p>
            </div>
          </section>
        </div>
        <div className="google-map-code m-tp2">
          <div className="fade"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.2179403896707!2d5.752557275426374!3d5.534658694445574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad0c761eb58b%3A0x5ae911c432fef009!2sSage%20Clinic!5e0!3m2!1sen!2sng!4v1701376913545!5m2!1sen!2sng"
            style={{ border: 0 }}
            frameborder="0"
            allowfullscreen=""
            loading="lazy"
            id="googleMap"
          ></iframe>
          <div className="abt-btn bg-green">
            <a
              href="https://www.google.com/maps/dir//Sage+Clinic,+29+Okere+Ugborikoko+Road,+Warri,+332104,+Delta/@5.5346587,5.7525573,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1041ad0c761eb58b:0x5ae911c432fef009!2m2!1d5.7551322!2d5.5346587?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              <DirectionBtn innertext="Get Driving Direction" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Direction;
