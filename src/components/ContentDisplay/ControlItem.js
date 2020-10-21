import React from "react";
import { Link } from "react-router-dom";

const ControlItem = ({ text, to }) => {
  return (
    <li>
      <Link to={to} className="control-item">
        {text}
      </Link>
    </li>
  );
};

export default ControlItem;
