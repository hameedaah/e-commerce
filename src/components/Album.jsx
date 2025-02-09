import React from "react";
import albumData from "./js/albumData";
import "./css/style.css";
import { Link } from "react-router-dom";

const Album = () => {
  return (
    <div className="album-footer">
      {albumData.map((item, index) => {
        return (
          <div key={item.id}>
            <Link
              to="/albumcarousel"
              state={{ pictures: albumData, currIndex: index }}
            >
              <img src={item.image} alt="item" className="album-img" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Album;
