import RestaurantCards from "./RestaurantCards";
import restaurants from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCards resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
