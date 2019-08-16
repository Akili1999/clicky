import React from "react";
import "./style.css";

const Card = props => (
  <div className="card" onClick={() => props.handleOnClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);
export default Card;