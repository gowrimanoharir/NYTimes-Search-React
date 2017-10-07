import React from "react";
import "./FormBtn.css";

export const FormBtn = props =>
  <button {...props} className={`btn search-btn btn-info`}>
    {props.children}
  </button>;
