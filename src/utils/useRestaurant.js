import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";
import axios from "axios";

export const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(RES_MENU_API + resId);

      const cards =
        response.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

      const menuCategories = cards.filter(
        (category) =>
          category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setRestaurantInfo(response.data.data.cards[2].card.card.info);
      setRestaurantMenu(menuCategories);
      // setRestaurantMenu(
      //   response.data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
      //     .card.card.itemCards
      // );

      setLoading(false);
    } catch (error) {
      setError("Error in fetching data. Please try again later!");
      console.log(`Error in fetching data:, ${error}`);
      setLoading(false);
    }
  };

  return { restaurantInfo, restaurantMenu, loading, error };
};
