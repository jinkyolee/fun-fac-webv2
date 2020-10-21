import React from "react";
import { ButtonL } from "../Button/Button";
import homeImage from "../../images/homeImage.png";

const ImageContainerHome = () => {
  return (
    <div className="home-img-cntnr">
      <div className="home-img-content">
        <span className="content content-sub">뭔가 멋있고 느낌 있는 문구</span>
        <span className="content content-main">
          창덕궁!!!! 고궁!!!! 우리나라 만세!!!
        </span>
        <span className="content content-sub">
          뭔가 멋있고 느낌 있는 문구 그리고 훨얼씬 많은 글을 보여주우우움
        </span>
      </div>
      <ButtonL location="/" text="우리 문화 발견하기" />
      <div className="img-cntnr">
        <img src={homeImage} className="home-img" alt="Home" />
        <div className="img-filter"></div>
      </div>
    </div>
  );
};

export default ImageContainerHome;
