import React from "react";
import Carousel from "./Carousel";
import Testimonial from "./Testimonial";
import Blog from "./Blog";
import "./css/style.css";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Testimonial />
      <div className="home-image"></div>
      <Blog display="none" />
    </div>
  );
};

export default Home;
