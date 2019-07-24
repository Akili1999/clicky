import React from "react";
import "./style.css";

const NavBar = props => (
  <div className="navbar">
    <div className="title">{props.children}</div>
    <div className="scores">
      CurrentScore: {props.score} TopScore: {props.highscore}
    </div>
  </div>
);

export default NavBar;