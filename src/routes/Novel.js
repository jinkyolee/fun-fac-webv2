import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Novel = () => {
  useEffect(() => {
    const navbar = document.querySelector(".nav-bar");
    navbar.style.visibility = "hidden";
    return () => {
      navbar.style.visibility = "visible";
    };
  }, []);

  return <Link to="/">Let's Go Home</Link>;
};

export default Novel;
