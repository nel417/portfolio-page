import React from "react";
import Hero from "./Hero";
import Carousel from "./Carousel";

function HomePage(props) {
  return (
    <div>
      <Hero
        title={props.title}
        subHeading={props.subHeading}
        text={props.text}
      />
      <Carousel />
    </div>
  );
}

export default HomePage;
