import React from 'react'
import {RES_THUMBNAIL_LINK_HEADER} from "../utils/constants"

const RestaurantCategoryItemCard = ({itemdata}) => {
    const {id, name, description, imageId, price, ratings} = itemdata.card.info
  return (
    <div className="flex relative h-72 justify-between border-b-4 border-gray-300 py-4 my-4">
      <div className="flex flex-col grow justify-between">
        <div className='font-semibold text'>id : {id}</div>
        <div className="font-semibold text-3xl">{name}</div>
        <div className="text-2xl font-bold">₹ {price / 100}</div>
        <div>
          <span className="text-xl font-semibold">⭐ {ratings.aggregatedRating.rating} </span>
          <span className="text-xl font-semibold text-gray-500">
            ({ratings.aggregatedRating.ratingCountV2})
          </span>
        </div>
        <div className="font-semibold text-gray-500 text-xl">{description}</div>
      </div>
      <div className="max-w-60 min-w-60 h-56 rounded-2xl overflow-hidden">
        <img
        className="w-full h-full"
        src={RES_THUMBNAIL_LINK_HEADER + imageId}
        alt=""
        />
        <div className="absolute top-[75%] translate-x-[70%] overflow-hidden rounded-xl shadow-gray-600 shadow-lg">
          <button className="bg-green-100 p-3 px-5 hover:bg-green-300 font-bold text-xl">ADD +</button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCategoryItemCard