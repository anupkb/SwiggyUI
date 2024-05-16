import React from "react";
import { Link } from "react-router-dom";
import { CLOUDINARY_IMG_URL } from "../utils/constants";
import useHomeData from "../utils/useHomeData";
import ShimmerEffect from "./Shimmer";
import star from "../assets/icons/star.svg";

const Body = () => {
  const { restaurants, menu, loading, error } = useHomeData();

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
    <>
      <div className="p-6 flex flex-wrap justify-center">
        <div className="w-4/5">
          <div className="">
            <h4 className="text-xl font-bold text-gray-600">
              What's on your mind?
            </h4>
          </div>

          <div className="flex justify-center">
            <div className="overflow-x-auto whitespace-nowrap p-4 hide-scrollbar">
              {menu.map((menuItem) => (
                <img
                  src={`${CLOUDINARY_IMG_URL}/${menuItem?.imageId}`}
                  className="p-2 w-40 h-45 inline-block"
                  alt=""
                  key={menuItem.id}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className="mt-10">
            <h4 className="text-xl font-bold text-gray-600">
              Top Restaurant Chains in Bhubaneswar
            </h4>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 flex flex-wrap justify-center">
        {restaurants?.map((resCard) => (
          <div className="m-6 w-64 restaurant-card" key={resCard?.info?.id}>
            {/* <Link
              to={`/restaurant/${resCard?.info?.id}?name=${encodeURIComponent(
                resCard?.info?.name
              )}`}
            /> */}

            <Link to={`/restaurant/${resCard?.info?.id}`}>
              <div className="card shadow-md rounded-lg scale-110 transition-all duration-300 hover:scale-100">
                <div className="restaurant-image">
                  <img
                    src={`${CLOUDINARY_IMG_URL}/${resCard?.info?.cloudinaryImageId}`}
                    alt=""
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                </div>
                <div className="restaurant-info p-4">
                  <h3 className="text-base font-semibold">
                    {resCard?.info?.name}
                  </h3>
                  <div className="rating-time flex items-center font-semibold text-sm">
                    <h4 className="text-gray-800 flex">
                      <span className="pt-1 mr-2">
                        <img src={star} alt="StarIcon" />
                      </span>
                      {resCard?.info?.avgRating}
                    </h4>
                    <p className="ml-1">• {resCard?.info?.sla?.slaString}</p>
                  </div>
                  <div className="location text-sm text-gray-600 font-normal">
                    {resCard?.info?.areaName}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
