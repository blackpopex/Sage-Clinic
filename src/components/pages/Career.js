import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import "./Career.css";
import Paragraph from "../Paragraph";

function Career() {
  return (
    <>
      <Pagetitlesection pagetitle="Career" />
      <section>
        <div className="container">
          <h4 className="light-green-color">Asist Us</h4>
          <h1 className="green-color form-width-header">
            In Delivering a Comprehensive First-World Medical Care.
          </h1>
          <div className="row flex">
            <div className="colum-40">
              <img
                src="/assets/images/career-nurse.png"
                className="Nurse"
                alt=""
              />
            </div>
            <div className="colum-60">
              <div className="career-text bg-grey">
                <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
              </div>
            </div>
          </div>
          <div className="position-left bg-green">
            <form action="action_page.php">
              <div className="form-width">
                <h3 className="light-green-color">Your Credentials:</h3>

                <div className="form-input-field m-tp">
                  <div className="form-row">
                    <div className="col-100">
                      <select id="Role" Name="Role">
                        <option value="Doctor">Doctor</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Doctor">Doctor</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row flex">
                    <div className="col-49_5">
                      <input
                        type="text"
                        name="yourFirstName"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-49_5">
                      <input
                        type="text"
                        name="yourLastName"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="form-row flex">
                    <div className="col-49_5">
                      <button className="btn">Upload CV</button>
                      <input type="file" />
                    </div>
                    <div className="col-49_5">
                      <button className="btn">Upload CV Letter</button>
                      <button className="btn">
                        <input type="file" />
                      </button>
                    </div>
                  </div>
                  <div className="form-row">
                    <button type="submit" className="green-color">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
