import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../../utils/constants";

const Restaurant = () => {
  const { resId } = useParams();
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <ul>
        {restaurantInfo.map((resItem) => (
          <li key={resItem.card.info.id}>{resItem.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurant;
