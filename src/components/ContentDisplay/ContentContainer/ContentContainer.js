import React from "react";

const ContentObject = ({
  data: {
    body: { title, overview, date },
    image,
  },
}) => {
  return (
    <div className="object-wrap">
      <div className="content-img-cntnr">
        <div className="content-img-filter"></div>
        <img src={image} className="object__image" alt="" />
      </div>
      <div className="object__text">
        <span className="content-title">{title}</span>
        <span className="content-overview">{overview}</span>
        <span className="content-date">{date}</span>
      </div>
    </div>
  );
};

// eslint-disable-next-line
const ContentContainer = ({ data }) => {
  return (
    <div className="content-container">
      {data.map(({ body, image }) => {
        return <ContentObject body={body} img={image} />;
      })}
    </div>
  );
};

export default ContentObject;
