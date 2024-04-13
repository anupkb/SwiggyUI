import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const restaurantData = await fetch(RES_MENU_API + resId);
      const jsonData = await restaurantData.json();

      const resMenu =
        jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards;

      setRestaurantInfo(resMenu);
      setLoading(false);
    } catch (error) {
      setError("Error in fetching data. Please try again later!");
      console.log(`Error in fetching data:, ${error}`);
      setLoading(false);
    }
  };

  return { restaurantInfo, loading, error };
};
