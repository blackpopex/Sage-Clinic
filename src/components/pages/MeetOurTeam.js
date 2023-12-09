import React from "react";
import "./MeetOurTeam.css";
import Paragraph from "../Paragraph";
import Pagetitlesection from "../Pagetitlesection";
import Accordion from "../Accordion";
import "./MeetOurTeam.css";
import Accordion2 from "../Accordion2";

function MeetOurTeam() {
  return (
    <>
      <div className="Meet_Our_Team">
        <Pagetitlesection pagetitle="Meet Our Team" />
        <div className="container">
          <section>
            <h1 className="green-color">Our Leardership Speaks Our Quality</h1>
            <Paragraph ptext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
          </section>

          <section className="accordion-wrapper">
            <Accordion h4text="Medical Team" />
            <div className="faint-border-line"></div>
            <Accordion2 h4text="Administrative Team" />
            <div className="faint-border-line"></div>
            <Accordion h4text="Management Team" />
          </section>
        </div>
      </div>
    </>
  );
}

export default MeetOurTeam;
