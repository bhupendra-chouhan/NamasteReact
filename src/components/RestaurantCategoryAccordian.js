import React, { useState } from "react"; 
import RestaurantCategoryItemList from "./RestaurantCategoryItemList";

const RestaurantCategoryAccordian = ({ data }) => {
  const [showItems, _setShowItems] = useState(false);

  const handleClick = () => {
    _setShowItems(!showItems);
  }

  return (
    <div className="w-[60%] p-4 m-4 bg-gray-100 rounded-lg shadow-lg shadow-black" key={data.title} >
      {/* Header */}
      <div className="font-bold text-2xl flex justify-between hover:cursor-pointer" onClick={handleClick}>
          <div>
            {data.title} ({data.itemCards.length})
          </div>
        <div>{!showItems? "⬇️" : "⬆️"}</div>
      </div>
      
      {/* Accordian Body */}
        <div>
            {showItems && <RestaurantCategoryItemList items={data.itemCards} /> }           
        </div>
    </div>
  );
};

export default RestaurantCategoryAccordian;
