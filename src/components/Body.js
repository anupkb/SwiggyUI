import React from "react";
import { Link } from "react-router-dom";
import { CLOUDINARY_IMG_URL } from "../../utils/constants";
import { useRestaurantData } from "../../utils/useRestaurantData";
import ShimmerEffect from "./Shimmer";

const Body = () => {
  const { resCards, loading, error } = useRestaurantData();
  console.log(resCards);
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
    <div className="p-6 flex flex-wrap justify-center">
      {resCards?.map((resCard) => (
        <div className="m-4 w-64 restaurant-card" key={resCard?.info?.id}>
          <Link
            to={`/restaurant/${resCard?.info?.id}?name=${encodeURIComponent(
              resCard?.info?.name
            )}`}
          >
            <div className="card shadow-md rounded-lg">
              <div className="restaurant-image">
                <img
                  src={`${CLOUDINARY_IMG_URL}/${resCard?.info?.cloudinaryImageId}`}
                  alt=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="restaurant-info p-4">
                <h3 className="text-xl font-semibold">{resCard?.info?.name}</h3>
                <div className="rating-time flex items-center">
                  <h4 className="text-gray-600">
                    {resCard?.info?.avgRating}{" "}
                    <span className="text-green-500">★</span>
                  </h4>
                  <p className="text-gray-500 ml-2">
                    • {resCard?.info?.sla?.slaString}
                  </p>
                </div>
                <div className="location text-gray-600">
                  {resCard?.info?.areaName}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Body;
