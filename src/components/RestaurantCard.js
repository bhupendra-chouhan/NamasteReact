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
      <div className="foodlogo-container h-64 flex rounded-xl overflow-hidden">
        <img
          className="foodlogo zoom-in-foodlogo w-full h-full bg-cover rounded-xl transition-transform duration-300 ease-in-out hover:transition-transform hover:scale-125"
          src={RES_THUMBNAIL_LINK_HEADER + cloudinaryImageId}
          alt="food-logo"
        />
      </div>
      <h2>
        <span className="font-bold text-xl">{name}: </span>
      </h2>
      <h4><span className="font-bold text-gray-500">id: </span>{id}</h4>
      <h4><span className="font-bold text-gray-500">Cuisines: </span>{cuisines.join(", ")}</h4>
      <h4><span className="font-bold text-gray-500">Avg. Rating: </span>{avgRating}</h4>
      <h4><span className="font-bold text-gray-500">Delivery Time: </span>{sla.deliveryTime} minutes</h4>
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
          className="p-1 absolute px-2 text-white bg-green-700 rounded-xl hover:bg-transparent"
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
