import React from "react";
import "../../css/routes/Home.css";
import homeImage from "../../images/homeImage.png";
import { ButtonL } from "../components/Button";
import contentImage from "../../images/contentImage.png";
import gameExplImg from "../../images/gameExplImg.png";
import footerImg from "../../images/footer.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-img-cntnr">
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
        <div className="img-cntnr">
          <img src={homeImage} className="home-img" alt="Home" />
          <div className="img-filter"></div>
        </div>
      </div>
      <div className="main-content-cntnr">
        <div className="featured-content-cntnr">
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
        <div className="info-cntnr">
          <div className="info-title">
            <ul>
              <li>주소</li>
              <li>대표</li>
              <li>전화번호</li>
              <li>이메일</li>
            </ul>
          </div>
          <div className="info-content">
            <ul>
              <li>서울시 종로구 이화동 대학로 116</li>
              <li>김해린/손서연</li>
              <li>010-XXXX-XXXX</li>
              <li>example@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="rights">
          Copyright Ⓒ FunHi Factory. All Rights Reserved.
        </div>
        <div className="footer-filter"></div>
        <img src={footerImg} className="footer-img" alt="" />
      </footer>
    </React.Fragment>
  );
};

export default Home;
