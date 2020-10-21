import React from "react";
import footerImg from "../../images/footer.jpg";

const Image = () => {
  return (
    <React.Fragment>
      <div className="footer-filter"></div>
      <img src={footerImg} className="footer-img" alt="" />
    </React.Fragment>
  );
};

export default Image;
