import React from "react";
import "./ContentMain.css";
import ContentObject from "../../components/ContentDisplay/ContentContainer/ContentContainer";
import ImageContainerC from "../../components/ImageContainer/ImageContainerC";
import sampleImage from "../../images/content.jpg";

const SAMPLE_DATA = {
  body: { title: "Sample1", overview: "Sample1", date: "Sample Date" },
  image: sampleImage,
};

const ContentMain = () => {
  return (
    <React.Fragment>
      <ImageContainerC />
      <ContentObject data={SAMPLE_DATA} />
    </React.Fragment>
  );
};

const ContentPalace = () => {
  return (
    <React.Fragment>
      <ImageContainerC />
    </React.Fragment>
  );
};

const ContentGame = () => {
  return (
    <React.Fragment>
      <ImageContainerC />
    </React.Fragment>
  );
};

const ContentNovel = () => {
  return (
    <React.Fragment>
      <ImageContainerC />
    </React.Fragment>
  );
};

export { ContentMain, ContentPalace, ContentGame, ContentNovel };
