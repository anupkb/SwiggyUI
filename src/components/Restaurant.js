import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";

const Restaurant = () => {
  const { resId } = useParams();

  const { restaurantInfo, loading, error } = useRestaurantMenu(resId);

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
