import React from "react";
import albumData from "./js/albumData";
import { Link, useNavigate } from "react-router-dom";
import "./css/style.css";
import { IoMdClose } from "react-icons/io";

const BigAlbum = () => {
  const navigate = useNavigate();
  return (
    <div className="big-album">
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
      <IoMdClose className="dismiss" onClick={() => navigate(-1)} />
    </div>
  );
};

export default BigAlbum;
