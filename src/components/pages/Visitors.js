import React from "react";
import "./Visitors.css";
import Pagetitlesection from "../Pagetitlesection";
import Paragraph from "../Paragraph";
import Unorderlist2 from "../Unorderlist2";
import Unorderlist3 from "../Unorderlist3";
import Unorderlist1 from "../Unorderlist1";

function Visitors() {
  return (
    <>
      <div className="Visitors">
        <Pagetitlesection pagetitle="Visitors" />
        <div className="container">
          <section>
            <div className="m-b3">
              <Paragraph ptext="We realize that spending time with your loved one is important to the healing process. As a health care organization, the health and safety of our patients, physicians, staff and visitors are our top priority." />
              <Unorderlist2
                list1="We have a visitation check-in system at our main lobbies, the Wingate building and Fairmount entrance. To help ensure a smooth and quick process"
                list2="For the safety of patients and staff, please stay in the patient’s room while visiting."
              />
            </div>
            <div className="m-b3">
              <h3 className="green-color">
                Visiting information for specific hospital areas.
              </h3>
              <Unorderlist3
                headingText="Adult Inpatient"
                list1="Two visitors at a time, 6 a.m. to 10 p.m."
                list2="Visitors must be age 12 or older."
                list3="One overnight visitor allowed."
              />
            </div>
            <div className="m-b3">
              <Unorderlist3
                headingText="Emergency Department (ED)"
                list1="Two visitors per patient, 24 hours/day, except in Pod A where one visitor is allowed."
                list2="Visitors must be age 12 or older."
                list3="For minors, two parents (or a support person)."
              />
            </div>
            <div className="m-b3">
              <Unorderlist2
                headingText="Family Birth Center (Labor and Delivery)"
                list1="One birth partner and one support person, 24 hours/day."
                list2="Visitors must be age 12 or older."
              />
            </div>
            <div className="m-b3">
              <Unorderlist1
                headingText="End of Life"
                list1="We will work with families to ensure that they are able to be with their loved one."
              />
            </div>
            <div className="m-b3">
              <Unorderlist1
                headingText="Same-Day Surgery (SDS)"
                list1="Two visitors total, one at a time."
              />
            </div>
            <div className="m-b3">
              <Unorderlist1
                headingText="Outpatient"
                list1="One visitor per patient in admit/recovery."
              />
            </div>
            <div className="m-b3">
              <Unorderlist3
                headingText="Overnight stay"
                list1="One visitor per patient."
                list2="Visitor must be age 18 or older."
                list3="No in and out privileges after 10 p.m. Visitors who leave after 10 p.m. may return at 6 a.m."
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Visitors;
