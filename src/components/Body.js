import React, { useState, useEffect } from "react";
import { IMG_URL } from "../../utils/constants";
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
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2960587&lng=85.8245398&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      const restaurantInfo =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantCard(restaurantInfo);
      // console.log(restaurantCard);
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
    <div className="hero">
      {restaurantCard?.map((resCard) => (
        <div className="restaurant-card" key={resCard?.info?.id}>
          <div className="card">
            <div className="restaurant-image">
              <img
                src={`${IMG_URL}/${resCard?.info?.cloudinaryImageId}`}
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
              <p>{resCard?.info?.areaName}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
