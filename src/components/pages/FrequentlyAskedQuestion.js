import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import { Icon } from "@iconify/react";
import "./FrequentlyAskedQuestion.css";
import FaqAccordion from "../FaqAccordion";

function FrequentlyAskedQuestion() {
  return (
    <>
      <div className="Frequently_Asked-Quesiton section-header-margin-top ">
        <Pagetitlesection pagetitle="Frequently Asked Questions" />

        <section>
          <div className="container">
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text " />

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
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
                        />
                      </li>
                      <div className="faint-border-line"></div>
                      <li>
                        <FaqAccordion
                          question="Does Sage Clinic have a Gynaecologist ?"
                          answer="Yes we do have a Gynaecologist"
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
