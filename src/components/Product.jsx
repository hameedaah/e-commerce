import React from "react";
import pictureData from "./js/pictureData";
import "./css/product.css";
import TopRated from "./TopRated";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

import { useLocation } from "react-router-dom";

const Product = () => {
  const { increase, setIncrease } = useContext(UserContext);
  const location = useLocation();
  const { currId } = location.state;

  let result = pictureData.filter((item) => {
    return item.id === currId;
  });

  const { productName, category, imageurl, price, description } = result[0];

  return (
    <section className="detail-page">
      <div className="detail">
        <div>
          <img src={imageurl} alt="" className="big-img" />
        </div>
        <div className="product-box">
          <div className="product-row">
            <h2>{productName}</h2>
            <p>{`CATEGORY: ${category}`}</p>
            <p>
              <span>&#8358;</span>
              {price}
            </p>
            <p>{description}</p>
          </div>

          <button
            className="submit product-btn"
            onClick={() => {
              setIncrease(increase + 1);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="detail-topRated">
        <TopRated className="dtr" />
      </div>
    </section>
  );
};

export default Product;
