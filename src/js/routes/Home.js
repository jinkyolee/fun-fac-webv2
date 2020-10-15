import React from "react";
import homeImage from "../../images/homeImage.png";
import { ButtonL } from "../components/Button";
import contentImage from "../../images/contentImage.png";
import gameExplImg from "../../images/gameExplImg.png";
import footerImg from "../../images/footer.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-img-container">
        <div className="home-img-content">
          <span className="content content-sub">
            뭔가 멋있고 느낌 있는 문구
          </span>
          <span className="content content-main">
            창덕궁!!!! 고궁!!!! 우리나라 만세!!!
          </span>
          <span className="content content-sub">
            뭔가 멋있고 느낌 있는 문구 그리고 훨얼씬 많은 글을 보여주우우움
          </span>
        </div>
        <ButtonL location="/" text="우리 문화 발견하기" />
        <div className="img-container">
          <img src={homeImage} className="home-img" alt="Home" />
          <div className="img-filter"></div>
        </div>
      </div>
      <div className="main-content-container">
        <div className="original-content-cntnr">
          <span className="content-title">콘텐츠</span>
          <img src={contentImage} className="content-img" alt="" />
        </div>
        <div className="game-intro-cntnr">
          <div className="content-clmn-left">
            <span className="content-title">게임에 대한 설명</span>
            <img src={gameExplImg} className="content-img--sml" alt="" />
          </div>
          <div className="content-clmn-rght">
            <p className="gameExpl">
              글글글글글글글글 글글글글글글글글 글글글글글글글글
              글글글글글글글글
            </p>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="footer-filter"></div>
        <img src={footerImg} className="footer-img" alt="" />
        <div className="info-container">
          <div className="info-title">
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="info-content">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Home;
