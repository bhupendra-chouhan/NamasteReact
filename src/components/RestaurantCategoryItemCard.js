import React from 'react'
import {RES_THUMBNAIL_LINK_HEADER} from "../utils/constants"

const RestaurantCategoryItemCard = ({itemdata}) => {
    const {id, name, description, imageId, price, ratings} = itemdata.card.info
  return (
    <div className="md:flex gap-3 relative md:h-fit md:justify-between border-b-4 border-gray-300 py-4 my-4">
      <div className="md:flex md:flex-col md:grow md:justify-between">
        <div className="font-semibold text">id : {id}</div>
        <div className="font-semibold text-3xl">{name}</div>
        <div className="text-2xl font-bold">₹ {price / 100}</div>
        <div>
          <span className="text-xl font-semibold">
            ⭐ {ratings.aggregatedRating.rating}
          </span>
          <span className="text-xl font-semibold text-gray-500">
            ({ratings.aggregatedRating.ratingCountV2 ? ratings.aggregatedRating.ratingCountV2 : 0})
          </span>
        </div>
        <div className="font-semibold text-gray-500 text-xl">{description}</div>
      </div>
      <div className="flex justify-center my-3 md:max-w-60 md:min-w-60 md:h-56 rounded-2xl overflow-hidden">
        <img
          className="md:w-full md:h-full"
          src={RES_THUMBNAIL_LINK_HEADER + imageId}
          alt=""
        />
        <div className="w-fit absolute top-[90%] md:top-[75%] overflow-hidden rounded-xl shadow-gray-600 shadow-lg">
          <button className="bg-green-100 p-3 px-5 hover:bg-green-300 font-bold text-xl">
            ADD +
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCategoryItemCard