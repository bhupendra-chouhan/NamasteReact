import { RES_THUMBNAIL_LINK_HEADER } from "../utils/constants";
import { Link } from "react-router-dom"

/* Styling Section: START*/

const styleResCard = {
  color: "inherit",
  border: "solid 3px orange"
};

/* Styling Section: END*/

const RestaurantCard = (props) => {
  const resOD = props?.resObejectData?.info;
  const { name, id, cuisines, avgRating, sla, cloudinaryImageId } = resOD; // object destructuring

  return (
      <Link to={`/restaurants/${id}`} className="res-card">
        <div className="foodlogo-container">
          <img
            className="foodlogo zoom-in-foodlogo"
            src={RES_THUMBNAIL_LINK_HEADER + cloudinaryImageId}
            alt="food-logo"
          />
        </div>
        <h2>{name}</h2>
        <h5>Cuisines: {cuisines.join(", ")}</h5>
        <h4>Avg. Rating: {avgRating}</h4>
        <h4>Delivery Time: {sla.deliveryTime} minutes</h4>
      </Link>
  );
};

export default RestaurantCard;
