import React from "react";
import Image from "./Image";
import Info from "./Info";
import Rights from "./Rights";

const Footer = () => {
  return (
    <footer className="home-footer">
      <Info />
      <Rights />
      <Image />
    </footer>
  );
};

export default Footer;
