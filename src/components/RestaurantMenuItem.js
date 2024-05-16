import React from "react";
import { CLOUDINARY_IMG_URL } from "../utils/constants";
import star from "../assets/icons/star.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenuItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleItem = (item) => {
    dispatch(addItem(item));
  };

  return data.map((item) => (
    <div key={item.card.info.id}>
      <div className="flex flex-row font-sans">
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
              <span className="pt-1 mr-2">
                <img src={star} alt="StarIcon" />
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
              <button
                onClick={() => handleItem(item)}
                className="border-1 border-gray-400 rounded-md bg-white text-green-600 font-medium px-8 py-2"
              >
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
