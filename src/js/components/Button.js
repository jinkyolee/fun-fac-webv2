import React from "react";
import { Link } from "react-router-dom";

const ButtonL = (props) => {
  return (
    <Link to={props.location} className="button">
      <span className="button__text">{props.text}</span>
    </Link>
  );
};

export { ButtonL };
