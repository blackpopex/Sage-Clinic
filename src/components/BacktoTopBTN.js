import React, { useState, useEffect } from "react";
import "./BacktoTopBTN.css";
import { Icon } from "@iconify/react";

function BacktoTopBTN() {
  const [showBactToTopBTN, setBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBtn(true);
      } else {
        setBtn(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        class={
          showBactToTopBTN ? "back-to-top-btn translate-btn" : "back-to-top-btn"
        }
        id="Back_Top_BTN"
      >
        <button class="scrollTopBtn" id="myTopBTN" onClick={goTop}>
          <Icon icon="lets-icons:arrow-top" id="topBTN" />
        </button>
      </div>
    </>
  );
}

export default BacktoTopBTN;
