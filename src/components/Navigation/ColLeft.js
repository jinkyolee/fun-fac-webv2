import React from "react";
import { Link } from "react-router-dom";

const ColLeft = () => {
  return (
    <div className="col col-side">
      <div className="nav__text button--side">
        <Link to="" className="nav__text">
          로그인
        </Link>
        &nbsp;|&nbsp;
        <Link to="" className="nav__text">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default ColLeft;
