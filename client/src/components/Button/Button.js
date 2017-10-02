import React from "react";
import "./Button.css";

export const Button = props =>
  <button {...props} className="btn btn-danger search-btn">
    {props.children}
  </button>;
