import React from "react";
import { Link } from "react-router-dom";
import { CLOUDINARY_IMG_URL } from "../../utils/constants";
import { useRestaurantData } from "../../utils/useRestaurantData";
import ShimmerEffect from "./Shimmer";
import "./css/body.css";

const Body = () => {
  const { resCards, loading, error } = useRestaurantData();

  if (loading) {
    return (
      <div>
        <ShimmerEffect />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main">
      {resCards?.map((resCard) => (
        <div className="restaurant-card" key={resCard?.info?.id}>
          <Link to={`/restaurant/${resCard?.info?.id}`}>
            <div className="card">
              <div className="restaurant-image">
                <img
                  src={`${CLOUDINARY_IMG_URL}/${resCard?.info?.cloudinaryImageId}`}
                  alt=""
                />
              </div>
              <div className="restaurant-info">
                <h3>{resCard?.info?.name}</h3>
                <div className="rating-time">
                  <h4>
                    {resCard?.info?.avgRating} <span className="star">★ </span>
                  </h4>
                  <p>• {resCard?.info?.sla?.slaString}</p>
                </div>
                <div className="location">{resCard?.info?.areaName}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
