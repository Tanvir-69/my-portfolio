import React from "react";
import "./ContactPage.css";

import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="formMainContainer">
      <h1 className="headText">
        <span className="darkBlue">Let's Contact: </span>
        Drop me a line and let the conversation begin!
      </h1>
      <div className="formContainer"></div>
    </div>
  );
};

export default ContactPage;
