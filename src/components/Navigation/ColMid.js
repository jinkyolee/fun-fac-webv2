import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const ColMid = () => {
  return (
    <div className="col-mid">
      <Link to="/content/main" className="nav__button nav__text col">
        콘텐츠
      </Link>
      <Link to="/" className="logo-container">
        <img src={logo} className="logo" alt="" />
      </Link>
      <Link to="" className="nav__button nav__text col">
        게임
      </Link>
    </div>
  );
};

export default ColMid;
