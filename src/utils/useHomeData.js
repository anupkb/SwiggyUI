import React, { useState, useEffect } from "react";
import { RES_DATA_API } from "./constants";
import axios from "axios";

const useHomeData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(RES_DATA_API);
      console.log(response.data.data);

      setRestaurants(
        response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setMenu(
        response?.data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
          ?.info
      );

      setLoading(false);
    } catch (error) {
      console.log(`Error in fetching data: ${error}`);
      setError("Error in fetching data. Please try again later.");
      setLoading(false);
    }
  };

  return { restaurants, menu, loading, error };
};

export default useHomeData;
