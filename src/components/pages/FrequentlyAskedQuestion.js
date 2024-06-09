import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import { Icon } from "@iconify/react";
import "./FrequentlyAskedQuestion.css";
import FaqAccordion from "../FaqAccordion";
import { Link } from "react-router-dom";

function FrequentlyAskedQuestion() {
  return (
    <>
      <div className="Frequently_Asked-Quesiton section-header-margin-top ">
        <Pagetitlesection pagetitle="Frequently Asked Questions" />

        <section>
          <div className="container">
            <p>
              Our frequently asked questions will help answer certain questions
              you may want to ask, questions such as your rights, visitors,
              insurance, our location, and many more. However, if your question
              is not answered kindly contact us via our
              <Link to="/Contact" className="light-green-color ml">
                Contact us page
              </Link>
            </p>

            <div className="Questions m-tp3">
              <div className="row flex">
                <div className="col-30">
                  <div className="Question-mark flex-column">
                    <Icon id="Quest" icon="pepicons-pop:question" />
                    <h1 className="green-color">FAQ</h1>
                  </div>
                </div>
                <div className="col-70">
                  <div className="itemized-questions">
                    <ul className="flex-colum">
                      <li>
                        <FaqAccordion
                          question="Do I have the right to inquire about the care I receive ?"
                          answer="Absolutely. Patients and family members have a right to ask questions, and they should feel invited to do so. They should ask questions about medication, about tests and test results."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="If instructions from my healthcare professional are unclear to me, what should I do?"
                          answer="Patients have the right to demand that any instructions they have to follow be adequately explained to them. Ensuring patients comprehend instructions is a crucial aspect of the work performed by our healthcare providers. If it's more convenient, patients can request printed instructions."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="What can I do to protect myself before I'm admitted ?"
                          answer="The easiest approach is for patients to bring a list of all the prescription drugs they take, along with any vitamins and herbal supplements."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="What should I bring to the medical facility ?"
                          answer="Pack a bag or backpack to include your personal belongings, health insurance cards, a list of your prescriptions, medical history, and personal identity cards."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Can I have visitors during my stay ?"
                          answer="During visiting hours, visitors are welcome."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="How can my loved ones be informed about my surgical status ?"
                          answer="Family and friends will receive regular updates from our healthcare provider."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic accept various health care insurance ?"
                          answer="Sage Clinic accepts a range of HMOs and health insurance plans."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Where is Sage Clinic located ?"
                          answer="Our address is 29 Okere Ugborikoko Road, Warri, 332104, Delta State, Nigeria. You can also use Google map to locate us, or you can phone us at +234 702-835-9700 for directions."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic accept a variety of payment methods ?"
                          answer="Indeed, among the payment methods we accept are cash deposits, online transfers, and point-of-sale systems(POS)."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="When is the inpatient visiting hour at Sage Clinic ?"
                          answer="Our inpatient visiting hours are as follows: 9:00 am to 11:00 am in the morning, 2:00 pm to 3:00 pm in the afternoon, and 6:00 pm to 7:00 pm in the evening."
                        />
                      </li>
                      <div className="faint-border-line"></div>
                    </ul>
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

export default FrequentlyAskedQuestion;
