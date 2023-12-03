import React, { useState } from "react";
import Logo from "../components/Sage-logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setState] = useState(false);
  const toggleMenu = () => setState(!click);
  const closeMobileMenu = () => setState(false);

  var acc, i;
  acc = document.getElementsByClassName("accordion");
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdown = this.nextElementSibling;
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
      } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + "px";
      }
    });
  }

  return (
    <>
      <header>
        <div className="top_header bg-green">
          <div className="container flex">
            <div className="brand-Wrapper">
              <Link to="/">
                <img src={Logo} alt="Sage Logo" className="brand-logo" />
              </Link>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-facebook white-color"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-twitter white-color"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-instagram white-color"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fa-brands fa-linkedin white-color"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="down_header bg-green">
          <div className="container">
            <nav>
              <div
                className="harmburger-menu"
                onClick={toggleMenu}
                id="hide-on-lg"
              >
                <i
                  className={
                    click
                      ? "fa-solid fa-xmark white-color"
                      : "fa-solid fa-bars-staggered white-color"
                  }
                ></i>
              </div>
              <ul
                id="myMenu"
                className={click ? "mobileMenu activated" : "mobileMenu"}
              >
                <div className="mobile-bg-image" id="hide-on-lg-screen"></div>
                <li className="lg-dropdown nav-Item">
                  <Link to="/" className="nav-Links accordion white-color">
                    About Us
                  </Link>
                  <div className="dropdown-content">
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      Our Story
                    </Link>
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      The Team
                    </Link>
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      Mission, Vision & Values
                    </Link>
                    <Link
                      to="/"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      Testimonies
                    </Link>
                    <Link
                      to="/FrequentlyAskedQuestion"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      Faq
                    </Link>
                  </div>
                </li>

                <li className="lg-dropdown nav-Item">
                  <Link to="/" className="nav-Links accordion white-color">
                    Patient's Support
                  </Link>
                  <div className="dropdown-content">
                    <Link
                      to="/Feedback"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      Feedback
                    </Link>
                    <Link
                      to="/Visitors"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      Visitors
                    </Link>
                    <Link
                      to="/Direction"
                      onClick={closeMobileMenu}
                      className="white-color dropdown-link"
                    >
                      Map & Direction
                    </Link>
                  </div>
                </li>

                <li className="nav-Item">
                  <Link
                    to="/Services"
                    onClick={closeMobileMenu}
                    className="nav-Links white-color"
                  >
                    Services
                  </Link>
                </li>

                <li className="nav-Item">
                  <Link
                    to="/Contact"
                    onClick={closeMobileMenu}
                    className="nav-Links white-color"
                  >
                    Contact Us
                  </Link>
                </li>

                <li className="nav-Item">
                  <Link
                    to="/BookAppointment"
                    onClick={closeMobileMenu}
                    className="nav-Links white-color"
                  >
                    Request Appointment
                  </Link>
                </li>
                <div className="specific-width">
                  <div className="emergency-contact-numb flex-colum">
                    <h6 className="emr-h6 light-green-color">Emergency ?</h6>
                    <p>
                      <i className="fa-solid fa-phone light-green-color"></i>
                      <span className="white-color">+234 (0) 807 420 2835</span>
                    </p>
                  </div>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
