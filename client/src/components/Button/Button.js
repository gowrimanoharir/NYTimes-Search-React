import React from "react";
import "./Button.css";

export const Button = props =>
  <button onClick={() => props.saveArticle? props.saveArticle(props.id) : props.deleteArticle(props.id)} className={`btn search-btn ${props.BtnClass}`}>
    {props.children}
  </button>;

export const ViewButton = props =>
<button className={`btn search-btn ${props.BtnClass}`}>
  {props.children}
</button>;  
