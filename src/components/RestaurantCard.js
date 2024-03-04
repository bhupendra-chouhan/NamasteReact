import React from "react";
import { RES_THUMBNAIL_LINK_HEADER } from "../utils/constants";

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
    <div>
      <div className="foodlogo-container flex rounded-xl overflow-hidden">
        <img
          className="foodlogo zoom-in-foodlogo w-full rounded-xl transition-transform duration-300 ease-in-out hover:transition-transform hover:scale-125"
          src={RES_THUMBNAIL_LINK_HEADER + cloudinaryImageId}
          alt="food-logo"
        />
      </div>
      <h2>
        {name}:{id}
      </h2>
      <h5>Cuisines: {cuisines.join(", ")}</h5>
      <h4>Avg. Rating: {avgRating}</h4>
      <h4>Delivery Time: {sla.deliveryTime} minutes</h4>
    </div>
  );
};

// For Promoted Restaurants (Declaring a Higher Order Component):
export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    // console.log({...props})
    return (
      <div>
        <label
          htmlFor="veg_res"
          className="p-1 px-2 pb-4 text-white bg-green-700 rounded-t-lg"
        >
          Vegetarian
        </label>
        <RestaurantCard
          id="veg_res"
          {...props}
        />
      </div>
    );
  };
};

export default RestaurantCard;
