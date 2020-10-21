import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setNavbar, setSelectedTab } from "./ConfigFunctions";
import ColLeft from "./ColLeft";
import ColMid from "./ColMid";
import ColRight from "./ColRight";

const Navigation = () => {
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
    setSelectedTab(location.pathname);
  }, [location]);

  return (
    <nav className="nav-bar nav-dir--none">
      <ColLeft />
      <ColMid />
      <ColRight />
    </nav>
  );
};

export default Navigation;
