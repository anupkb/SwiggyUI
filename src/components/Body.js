import React from "react";
import "./css/body.css";
import { IMG_URL } from "../../utils/constants";

const Body = ({ resData }) => {
  console.log(resData);
  return (
    <div className="hero">
      {resData.map((resCard, index) => (
        <div className="restaurant-card" key={index}>
          <div className="card">
            <div className="restaurant-image">
              <img
                src={`${IMG_URL}/${resCard.info.cloudinaryImageId}`}
                alt=""
              />
            </div>
            <div className="restaurant-info">
              <h3>{resCard.info.name}</h3>
              <div className="rating-time">
                <h4>
                  {resCard.info.avgRating} <span className="star">★ </span>
                </h4>
                <p>• {resCard.info.sla.slaString}</p>
              </div>
              <p>{resCard.info.areaName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
