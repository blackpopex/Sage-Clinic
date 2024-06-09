import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const getDate = new Date();
  const year = getDate.getFullYear();
  return (
    <div className="footer-wrapper bg-green">
      <footer className="container">
        <section>
          <div className="row">
            <div className="col-50">
              <div className="small-width">
                <h4 className="white-color sage-clinic">
                  Sage Clinic & Maternity
                </h4>
                <p className="light-green-color">
                  29 Okere Ugborikoko Road, Warri, 332104, Delta State, Nigeria
                </p>
                <p className="light-green-color">
                  <span>
                    <b>+234(806) 847 0244, </b>
                  </span>
                  <span>
                    <b>contact@sageclinic.com </b>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="row flex align-start">
            <div className="col-30">
              <h6 className="white-color">About Us</h6>
              <ul>
                <li className="ul-list">
                  <Link to="/" className="ul-link remove-decor">
                    Our Story
                  </Link>
                </li>
                <li className="ul-list">
                  <Link to="/" className="ul-link remove-decor">
                    The Team
                  </Link>
                </li>
                <li className="ul-list">
                  <Link to="/" className="ul-link remove-decor">
                    Mission, Vision & Values
                  </Link>
                </li>
                <li className="ul-list">
                  <Link to="/" className="ul-link remove-decor">
                    Testimonies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-30">
              <h6 className="white-color">Quick Links</h6>
              <ul>
                <li className="ul-list">
                  <Link to="/" className="ul-link remove-decor">
                    Map & Direction
                  </Link>
                </li>
                <li className="ul-list">
                  <Link to="/" className="ul-link remove-decor">
                    Feedback
                  </Link>
                </li>
                <li className="ul-list">
                  <Link to="/" className="ul-link remove-decor">
                    Visitors
                  </Link>
                </li>
                <li className="ul-list">
                  <Link to="/Career" className="ul-link remove-decor">
                    Career
                  </Link>
                </li>
                <li className="ul-list">
                  <Link
                    to="/FrequentlyAskedQuestion"
                    className="ul-link remove-decor"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-40">
              <h6 className="white-color">Contact & Privacy</h6>
              <ul className=" m-tp  cont-pri-smallwidth">
                <li className="ul-list flex d-block">
                  <Link to="/" className="ul-link remove-decor">
                    Contact Us
                  </Link>
                  <Link to="/" className="ul-link  remove-decor" id="move-left">
                    Our Location
                  </Link>
                </li>
                <li className="ul-list flex d-block">
                  <Link to="/TermsOfUse" className="ul-link remove-decor">
                    Terms of Use
                  </Link>

                  <Link to="/PrivacyPolicy" className="ul-link remove-decor">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <small>
              <span className="white-color copywrite">
                &copy; {year} Sage Clinic & Maternity. All Rights Reserved.
              </span>
              <span className="green-line"></span>
              <Link to="/" className="light-green-color remove-decor">
                Designed and Built by<b> Blackpopex</b>
              </Link>
            </small>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
