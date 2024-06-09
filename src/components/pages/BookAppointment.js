import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import "./BookAppointment.css";

function BookAppointment() {
  return (
    <>
      <div className="Book_Appointment section-header-margin-top">
        <Pagetitlesection pagetitle="Request Appointment" />
        <section>
          <div className="container">
            <h3 className="green-color form-width-header">
              If you require emergency medical attention, please call us.
            </h3>
            <Paragraph ptext="For appointment scheduling or to inquire about the clinic's ability to treat a particular illness, please call the Sage Clinic front desk at +234 (0) 807 420 2835. " />

            <div className="m-tp3 form-width">
              <div className="form-container">
                <h4 className="light-green-color">Patient Information:</h4>
                <form id="myForm" action="action_page.php">
                  <div className="form-row flex">
                    <div className="col-49_5">
                      <label for="first_name">First Name:</label>
                      <input type="text" name="yourFirstName" id="first_name" />
                    </div>
                    <div className="col-49_5">
                      <label for="last_name">Last Name:</label>
                      <input type="text" name="yourLastName" id="last_name" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-100">
                      <label for="address">Address:</label>
                      <input type="text" name="yourAddress" id="address" />
                    </div>
                  </div>
                  <div className="form-row flex">
                    <div className="col-49_5">
                      <label for="state">State:</label>
                      <input type="text" name="yourState" id="state" />
                    </div>
                    <div className="col-49_5">
                      <label for="city">City:</label>
                      <input type="text" name="yourCity" id="city" />
                    </div>
                  </div>
                  <div className="form-row flex">
                    <div className="col-49_5">
                      <label for="phone_number">Phone Number:</label>
                      <input
                        type="text"
                        name="yourPhoneNumber"
                        id="phone_number"
                      />
                    </div>
                    <div className="col-49_5">
                      <label for="email">Email Address:</label>
                      <input type="text" name="yourEmail" id="email" />
                    </div>
                  </div>
                  <div className="form-row label-paragraph">
                    <label>
                      Please provide more details about your request, including
                      the type of doctor you are requesting
                    </label>
                  </div>
                  <div className="form-row">
                    <textarea cols={5} rows="6"></textarea>
                    <button type="submit" className="bg-green white-color">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BookAppointment;
