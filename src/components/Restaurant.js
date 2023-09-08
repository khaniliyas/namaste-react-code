import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rest_URL } from "../utils/constants";

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { restId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(Rest_URL + restId);

    const json = await data.json();
    setRestaurant(json.data);
  };
  if (restaurant != null) {
    const { name, cuisines } = restaurant?.cards[0]?.card?.card?.info;
    const { itemCards } =
      restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;
    console.log(itemCards);
    return (
      <div className="restaurant">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <ul>
          {itemCards.map((item) => {
            return (
              <li>
                {item.card.info.name} -Rs{item.card.info.price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Restaurant;
