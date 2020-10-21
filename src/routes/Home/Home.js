import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import ImageContainerH from "../../components/ImageContainer/ImageContainerH";
import BodyH from "../../components/HomePage/HomeBody";

const Home = () => {
  return (
    <React.Fragment>
      <ImageContainerH />
      <BodyH />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
