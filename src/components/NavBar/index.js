import React from "react";
import "./style.css";

const NavBar = props => (
  <div className="navbar navbar-light bg-black" id="nav">
    <div className="title">{props.children}</div>
    <div className="scores">
      Current Score: {props.score} Top Score: {props.highscore}
    </div>
  </div>
);

export default NavBar;