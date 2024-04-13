import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CLOUDINARY_IMG_URL, RES_DATA_API } from "../../utils/constants";
import "./css/body.css";

const Body = () => {
  const [restaurantCard, setRestaurantCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_DATA_API);
      const jsonData = await data.json();
      const restaurantInfo =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantCard(restaurantInfo);

      setIsLoading(false);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main">
      {restaurantCard?.map((resCard) => (
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
