import React from "react";
import contentImage from "../../images/contentImage.png";
import gameExplImg from "../../images/gameExplImg.png";

const HomeBody = () => {
  return (
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
            글글글글글글글글 글글글글글글글글 글글글글글글글글 글글글글글글글글
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
