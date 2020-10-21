import React from "react";
import contentImage from "../../images/content.jpg";
import ContentController from "../ContentDisplay/ContentController";

const ImageContainerContent = () => {
  return (
    <React.Fragment>
      <div className="home-img-cntnr">
        <div className="img-cntnr">
          <img src={contentImage} className="home-img" alt="Home" />
          <div className="img-filter"></div>
        </div>
        <ContentController />
      </div>
    </React.Fragment>
  );
};

export default ImageContainerContent;
