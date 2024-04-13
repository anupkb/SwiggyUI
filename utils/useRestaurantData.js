import { useState, useEffect } from "react";
import { RES_DATA_API } from "./constants";

export const useRestaurantData = () => {
  const [resCards, setResCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const restaurantData = await fetch(RES_DATA_API);
      const jsonData = await restaurantData.json();

      const cardInfo =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResCards(cardInfo);
      setLoading(false);
    } catch (error) {
      console.log(`Error in fetching data: ${error}`);
      setError("Error in fetching data. Please try again later.");
      setLoading(false);
    }
  };

  return { resCards, loading, error };
};
