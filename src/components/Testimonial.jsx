import React, { useEffect } from "react";
import peopleData from "./js/peopleData";
import { Link } from "react-router-dom";
import "./css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";

const Testimonial = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 500,
      },
      []
    );
  });

  return (
    <section className="testimonial-container">
      <div className="text">
        <h2>Testimonials</h2>
        <p>Read our testimonials from clients</p>
      </div>
      <section className="testimonial">
        {peopleData.map((person) => {
          const { id, image, testimonial, fullTestimonial } = person;
          return (
            <section key={id} className="speechBubble">
              <div className="bubbleText">
                <p>{testimonial}</p>
              </div>
              <Link
                to="/home/main-testimonial"
                state={{
                  id: id,
                  image: image,
                  fullTestimonial: fullTestimonial,
                }}
              >
                <div className="person-img-container">
                  <img
                    src={image}
                    className="person-img"
                    data-aos="fade-down"
                    alt="person"
                  />
                </div>
              </Link>
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default Testimonial;
