import { IMG_URL } from "../utils/constants";
const RestaurantCards = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{avgRating}</h3>
      <h3>{resData.info.cuisines.join(", ")}</h3>
    </div>
  );
};

export default RestaurantCards;
