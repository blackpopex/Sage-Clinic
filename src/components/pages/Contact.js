import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import { Icon } from "@iconify/react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="Contact_us">
        <Pagetitlesection pagetitle="Contact Us" />
        <section>
          <div className="container">
            <h4 className="green-color">Phone Directory</h4>
            <table className="table-width">
              <tr>
                <th className="col-70">Frontdesk/Reception</th>
                <td className="col-30">+234 (0) 807 420 2835</td>
              </tr>
              <tr>
                <th className="secondary-color col-70">Nurses Station</th>
                <td className="col-30">+234 (0) 807 420 2835</td>
              </tr>
              <tr>
                <th className="secondary-color col-70">Pharmacy</th>
                <td className="col-30">+234 (0) 807 420 2835</td>
              </tr>
              <tr>
                <th className="secondary-color col-70">Laboratory</th>
                <td className="col-30">+234 (0) 807 420 2835</td>
              </tr>
              <tr>
                <th className="secondary-color col-70">Radiology</th>
                <td className="col-30">+234 (0) 807 420 2835</td>
              </tr>
            </table>

            <div className="contact-information table-width">
              <p>
                if you still have a question about Sage Clinic & Maternity,
                kindly complete the form below
              </p>
              <div className="form-width">
                <h4 className="green-color">Contact Information</h4>
                <form id="myForm" action="action_page.php">
                  <div className="form-row align-start">
                    <div className="col-50">
                      <div className="col-95">
                        <input
                          type="text"
                          name="yourFirstName"
                          id="first_name"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          name="yourLastName"
                          id="last_name"
                          placeholder="Last Name"
                        />
                        <input
                          type="text"
                          name="yourEmail"
                          id="email"
                          placeholder="Email"
                        />
                        <input
                          type="text"
                          name="yourPhoneNumber"
                          id="phone_number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-50">
                      <div className="col-95 align-right">
                        <textarea
                          placeholder="Your Message"
                          cols={5}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <button type="submit" className="bg-green white-color">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="address-email">
              <div>
                <h5 className="light-green-color">
                  <Icon icon="ion:home" id="email" /> <span>Our Location</span>
                </h5>
                <p>2051 M Street, Northwest, Washington, DC, 20036.</p>
                <p>
                  <a
                    href="https://www.google.com/maps/dir//Sage+Clinic,+29+Okere+Ugborikoko+Road,+Warri,+332104,+Delta/@5.5346587,5.7525573,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1041ad0c761eb58b:0x5ae911c432fef009!2m2!1d5.7551322!2d5.5346587?entry=ttu"
                    target="_blank"
                    className="green-color remove-decor,"
                  >
                    <b>Get Driving Direction</b>
                  </a>
                </p>
              </div>
              <div className="m-tp3">
                <h5 className="light-green-color">
                  <Icon icon="material-symbols-light:attach-email" id="email" />
                  <span>Email</span>
                </h5>

                <p>
                  <a href="mailto:Contact@sageclinic.com">
                    <b className="green-color">contact@sageclinic.com</b>
                  </a>
                </p>
                <p>
                  <a href="mailto:support@sageclinic.com">
                    <b className="green-color">support@sageclinic.com</b>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
