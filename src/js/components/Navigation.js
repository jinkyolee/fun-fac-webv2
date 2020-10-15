import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const setNavbar = () => {
  const navbar = document.querySelector(".nav-bar");
  const links = document.querySelectorAll(".nav__text");
  let positionY = window.pageYOffset;

  if (positionY > 5) {
    navbar.classList.add("nav-dir--move");
    for (const link of links) {
      link.classList.add("button-move");
    }
  } else {
    navbar.classList.remove("nav-dir--move");
    for (const link of links) {
      link.classList.remove("button-move");
    }
  }
};

const Navigation = () => {
  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
  }, []);

  return (
    <nav className="nav-bar nav-dir--none">
      <div className="col-side">
        <div className="nav__button nav__text button--side">
          <Link to="" className="nav__text">
            로그인
          </Link>
          &nbsp;|&nbsp;
          <Link to="" className="nav__text">
            회원가입
          </Link>
        </div>
      </div>
      <div className="col-mid">
        <Link to="" className="nav__button nav__text">
          콘텐츠
        </Link>
        <Link to="/" className="logo-container">
          <img src={logo} className="logo" alt="" />
        </Link>
        <Link to="" className="nav__button nav__text ">
          게임
        </Link>
      </div>
      <div className="col-side">
        <Link to="" className="nav__button  nav__text button--side">
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
