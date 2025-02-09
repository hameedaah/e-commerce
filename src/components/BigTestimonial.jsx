import React from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import "./css/style.css";

const BigTestimonial = () => {
  const location = useLocation();
  console.log(location);
  const { id, image, fullTestimonial } = location.state;
  return (
    <div className="big-testimonial-container">
      <section className="main-testimonial">
        <h2>{`Testimonial ${id}`}</h2>
        <img src={image} alt="testimonial" />
        <p>{fullTestimonial}</p>
      </section>

      <Sidebar className="side" />
    </div>
  );
};

export default BigTestimonial;
