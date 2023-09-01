import RestaurantCards from "./RestaurantCards";
import restaurants from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [resList, setList] = useState(restaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterdList = resList.filter((rest) => {
              return rest.info.avgRating > 4;
            });
            setList(filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
