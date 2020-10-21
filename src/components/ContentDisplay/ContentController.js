import React, { useEffect } from "react";
import ControlItem from "./ControlItem";
import "./ContentController.css";
import setCurrentPage from "./SetCurrentPage";
import { useLocation } from "react-router-dom";

const ContentController = () => {
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="controller">
      <ul>
        <ControlItem text="전체" to="/content/main" />
        <ControlItem text="고궁 관련 콘텐츠" to="/content/palace" />
        <ControlItem text="게임 관련 콘텐츠" to="/content/game" />
        <ControlItem text="소설 보러 가기" to="/content/novel" />
      </ul>
    </div>
  );
};

export default ContentController;
