import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import "./Feedback.css";

function Feedback() {
  return (
    <>
      <div className="Patient_feedback section-header-margin-top ">
        <Pagetitlesection pagetitle="Patient's Feedback" />
        <section>
          <div className="container">
            <div className="container-relative">
              <div className="m-b3 colum-50 position-left">
                <h1 className="green-color form-width-header">
                  Your Feedback Makes Us Serve You Better
                </h1>
                <p className="sm-width">
                  We appreciate you allowing us to be of service to you. At Sage
                  Clinic, our core values are complete satisfaction,
                  high-quality service, and patient safety. We genuinely ask
                  that you take a time to provide us with your thoughts and
                  comments regarding our hospital services so that we can
                  continue to strive to provide you with the finest care
                  possible.
                </p>
              </div>
              <div className="colum-50 position-right">
                <img
                  src="/assets/images/feedback-image.jpg"
                  className="feedback-image"
                  alt="Feedback"
                />
              </div>
              <div className="position-left bg-green">
                <form action="action_page.php">
                  <div className="form-width">
                    <h3 className="light-green-color">Patient Information:</h3>
                    <div className="form-input-field m-tp">
                      <div className="form-row flex">
                        <div className="col-49_5">
                          <label htmlfor="first_name">First Name:</label>
                          <input
                            type="text"
                            name="yourFirstName"
                            id="first_name"
                          />
                        </div>
                        <div className="col-49_5">
                          <label htmlfor="last_name">Last Name:</label>
                          <input
                            type="text"
                            name="yourLastName"
                            id="last_name"
                          />
                        </div>
                      </div>
                      <div className="form-row flex">
                        <div className="col-49_5">
                          <label htmlfor="phone_number">Phone Number:</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            id="phone_number"
                          />
                        </div>
                        <div className="col-49_5">
                          <label htmlfor="Email">Email Address:</label>
                          <input type="text" name="emailAddress" id="Email" />
                        </div>
                      </div>
                      <div className="form-row">
                        <label htmlfor="feedback_msg">Feedback Message:</label>
                        <textarea cols={5} rows="6"></textarea>
                        <button type="submit" className="green-color">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div className="colum-80 position-right bg-light-green feedback-line">
                <div>
                  <h4>Your Experience Matters to Us</h4>
                  <p>You may also contact our feedback center by calling...</p>
                  <h3>+234 (0) 807 420 2835</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Feedback;
