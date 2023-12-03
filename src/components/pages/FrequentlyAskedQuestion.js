import React from "react";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import { Icon } from "@iconify/react";
import "./FrequentlyAskedQuestion.css";

function FrequentlyAskedQuestion() {
  var largescreenAcc, m;
  largescreenAcc = document.getElementsByClassName("myaccordion");
  for (m = 0; m < largescreenAcc.length; m++) {
    largescreenAcc[m].addEventListener("click", function () {
      this.classList.toggle("nowactive");

      var nextElement = this.nextElementSibling;
      if (nextElement.style.maxHeight) {
        nextElement.style.maxHeight = null;
      } else {
        nextElement.style.maxHeight = nextElement.scrollHeight + "px";
      }
    });
  }

  return (
    <>
      <div className="Frequently_Asked-Quesiton">
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
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
                      <li className="my-dropdown">
                        <button className="myaccordion green-color">
                          About Us
                        </button>
                        <div className="my-dropdown-content">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text Lorem Ipsum is simply
                            dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy
                            text
                          </p>
                        </div>
                      </li>
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
