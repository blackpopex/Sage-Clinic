import React from "react";
import { Icon } from "@iconify/react";
import "./Whatsapp.css";

function Whatsapp() {
  return (
    <>
      <div className="whatsapp-container">
        <a
          href="https://wa.me/07059932224"
          className="whatsapp-btn"
          target="_blank"
          aria-label="Chat on WhatsApp"
        >
          <Icon icon="logos:whatsapp-icon" className="whatsappicon" />
        </a>
        <span>Chat with Us </span>
      </div>
    </>
  );
}

export default Whatsapp;
