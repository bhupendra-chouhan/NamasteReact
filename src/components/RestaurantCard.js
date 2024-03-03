import React from "react";
import { RES_THUMBNAIL_LINK_HEADER } from "../utils/constants";
import { Link } from "react-router-dom";

/* Styling Section: START*/

const styleResCard = {
  color: "inherit",
  border: "solid 3px orange",
};

/* Styling Section: END*/

const RestaurantCard = (props) => {
  const resOD = props?.resObejectData?.info;
  const { name, id, cuisines, avgRating, sla, cloudinaryImageId } = resOD; // object destructuring

  return (
    <Link
      to={`/restaurants/${id}`}
      className="w-60 p-1 m-1 bg-gray-200 border-gray-shimmer border-solid border-2 rounded-2xl min-w-20 min-h-25 hover:bg-orange-400 hover:cursor-pointer"
    >
      <div className="foodlogo-container flex rounded-xl overflow-hidden">
        <img
          className="foodlogo zoom-in-foodlogo w-full rounded-xl transition-transform duration-300 ease-in-out hover:transition-transform hover:scale-125"
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


// For Promoted Restaurants (Declaring a Higher Order Component):
export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="w-60 p-1 m-1 bg-gray-00 border-gray-shimmer border-solid border-2 rounded-2xl min-w-20 min-h-25 hover:bg-orange-400 hover:cursor-pointer">
        <label htmlFor="veg_res" className="bg-green-400 rounded-lg p-1 m-1">Vegetarian</label>
        <RestaurantCard id="veg_res" {...props} />
      </div>
    );
  };
}; 

export default RestaurantCard;
