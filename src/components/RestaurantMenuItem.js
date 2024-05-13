import React from "react";
import { CLOUDINARY_IMG_URL } from "../../utils/constants";

const RestaurantMenuItem = ({ data }) => {
  return data.map((item) => (
    <div>
      <div className="flex flex-row font-sans" key={item.card.info.id}>
        <div className="w-4/6">
          <div className="mb-1 text-lg text-gray-900 font-medium">
            <h4>{item.card.info.name}</h4>
          </div>
          <div className="text-lg text-gray-900">
            ₹{" "}
            {item.card.info.price
              ? item.card.info.price / 100
              : item.card.info.defaultPrice / 100}
          </div>

          {item.card.info.ratings.aggregatedRating.rating ? (
            <div className="flex text-sm mb-2">
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
              {item.card.info.ratings.aggregatedRating.rating}(
              {item.card.info.ratings.aggregatedRating.ratingCountV2})
            </div>
          ) : (
            ""
          )}

          <div className="mb-2">{item.card.info.description}</div>
        </div>
        <div className="w-2/6 relative flex justify-end">
          <div className="w-40 h-40 relative">
            <img
              className="rounded-lg object-cover w-full h-full"
              src={`${CLOUDINARY_IMG_URL}/${item.card.info.imageId}`}
              alt="item_img"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <button className="border-1 border-gray-400 rounded-md bg-white text-green-600 font-medium px-8 py-2">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6 mb-6" />
    </div>
  ));
};

export default RestaurantMenuItem;
