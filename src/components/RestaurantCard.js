import { RES_THUMBNAIL_LINK_HEADER } from "../utils/constants";

/* Styling Section: START*/

const styleResCard = {
  backgroundColor: "grey",
  color: "white",
};

/* Styling Section: END*/

const RestaurantCard = (props) => {
  const resOD = props?.resObejectData?.info;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resOD; // object destructuring

  return (
    <div className="res-card" style={styleResCard}>
      <img
        className="foodLogo"
        src={RES_THUMBNAIL_LINK_HEADER + cloudinaryImageId}
        alt="food-logo"
      />
      <h2>{name}</h2>
      <h5>Cuisines: {cuisines.join(", ")}</h5>
      <h4>Avg. Rating: {avgRating}</h4>
      <h4>Delivery Time: {sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
