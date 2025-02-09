import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import "./css/style.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  });

  return (
    <button className={visible ? "scroll-up" : "no-scroll"}>
      <MdKeyboardArrowUp onClick={scrollToTop} />
    </button>
  );
};

export default ScrollButton;
