import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import { CLOUDINARY_IMG_URL } from "../../utils/constants";
import ShimmerEffect from "./Shimmer";

const Restaurant = () => {
  const { resId } = useParams();
  const restaurantName = new URLSearchParams(window.location.search).get(
    "name"
  );
  console.log(restaurantName);
  const { restaurantInfo, loading, error } = useRestaurantMenu(resId);
  const [showFullDescription, setShowFullDescription] = useState(false);
  console.log(restaurantInfo);
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

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="flex flex-row">
      <div className="w-1/5"></div>
      <div className="w-3/5 font-sans mx-4">
        <div className="my-8 px-5">
          <h2 className="text-xl font-semibold text-slate-600">
            {restaurantName}
          </h2>
          <hr />
        </div>

        {restaurantInfo.map((resItem) => (
          <div
            key={resItem.card.info.id}
            className="flex flex-row my-8 px-5 border rounded-md shadow-lg bg-white"
          >
            <div className="flex flex-col w-4/5 p-2">
              <h4 className="text-lg font-medium text-slate-600 underline py-2">
                {resItem.card.info.name}
              </h4>
              <span className="py-1">
                Rs.{" "}
                {resItem.card.info.price
                  ? resItem.card.info.price / 100
                  : "999"}
              </span>
              <span className="py-1">
                {resItem.card.info.ratings.aggregatedRating.rating
                  ? resItem.card.info.ratings.aggregatedRating.rating
                  : "0"}{" "}
                <span className="text-green-500">★</span>
              </span>
              <p className="py-1">
                {showFullDescription
                  ? resItem.card.info.description
                  : resItem.card.info.description?.substring(0, 150)}
                {!showFullDescription &&
                  resItem.card.info.description?.length > 150 && (
                    <a
                      href="#"
                      className="text-blue-500 underline"
                      onClick={toggleDescription}
                    >
                      ...more
                    </a>
                  )}
              </p>
            </div>
            <div className="flex w-1/5">
              <img
                className="py-3 object-cover w-full"
                src={`${CLOUDINARY_IMG_URL}/${resItem?.card?.info?.imageId}`}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default Restaurant;
