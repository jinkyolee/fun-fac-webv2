import React from "react";

const Info = () => {
  return (
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
  );
};

export default Info;
