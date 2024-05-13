import React from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurant";
import ShimmerEffect from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();
  // const restaurantName = new URLSearchParams(window.location.search).get(
  //   "name"
  // );
  const { restaurantInfo, restaurantMenu, loading, error } =
    useRestaurantMenu(resId);

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
    <div className="flex flex-row">
      <div className="w-1/5"></div>
      <div className="w-3/5 font-sans mx-4">
        <div className="my-8 px-5">
          <h2 className="text-2xl font-bold text-gray-700">
            {restaurantInfo.name}
          </h2>
          <hr />
        </div>

        {restaurantMenu.map((resMenu) => (
          <RestaurantMenu data={resMenu.card.card} />
        ))}
      </div>
      <div className="w-1/5"></div>
    </div>
  );
};

export default Restaurant;
