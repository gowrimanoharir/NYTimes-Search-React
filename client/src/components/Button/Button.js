import React from "react";
import "./Button.css";

export const Button = props =>
  <button onClick={() => props.saveArticle(props.id)} className={`btn search-btn ${props.BtnClass}`}>
    {props.children}
  </button>;
