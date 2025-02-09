import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "./css/account.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Search from "./Search";
import TopRated from "./TopRated";
import ToCategories from "./ToCategories";

const Sidebar = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 5000,
      },
      []
    );
  });

  return (
    <section className="sidebar-container">
      {/* Search Component */}
      <Search />

      {/* Top Rated Products */}
      <TopRated />

      {/* Archives */}
      <section
        className="card"
        data-aos="fade-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="500"
      >
        <h2 className="title">Archives</h2>
        <p className="calender-month">
          <FaCalendarAlt className="cal-icon" />
          November 2021
        </p>
      </section>

      {/* Categories Component */}
      <ToCategories />
    </section>
  );
};

export default Sidebar;
