import React from "react";
import "./Button.css";

const Button = ({ title, buttonHandler }) => {
  return (
    <div className="btnContainer" onClick={buttonHandler}>
      <a className="button">{title}</a>
    </div>
  );
};

export default Button;
