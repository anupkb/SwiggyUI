import React from "react";
import { Link } from "react-router-dom";
import { CLOUDINARY_IMG_URL } from "../../utils/constants";
import useHomeData from "../../utils/useHomeData";
import ShimmerEffect from "./Shimmer";

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
                      <span className="text-green-500 pt-1 mr-2">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="none"
                          role="img"
                          aria-hidden="true"
                          strokeColor="rgba(2, 6, 12, 0.92)"
                          fillColor="rgba(2, 6, 12, 0.92)"
                        >
                          <circle
                            cx="10"
                            cy="10"
                            r="9"
                            fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                          ></circle>
                          <path
                            d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                            fill="white"
                          ></path>
                          <defs>
                            <linearGradient
                              id="StoreRating20_svg__paint0_linear_32982_71567"
                              x1="10"
                              y1="1"
                              x2="10"
                              y2="19"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#21973B"></stop>
                              <stop offset="1" stop-color="#128540"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
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
