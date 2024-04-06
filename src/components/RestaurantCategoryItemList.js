import React from 'react'
import RestaurantCategoryItemCard from "./RestaurantCategoryItemCard";

const RestaurantCategoryItemList = (items) => {
    const itemsArray = items.items
    // console.log(itemsArray)
    return (
      <div>
        {/* <RestaurantCategoryItemCard itemsdata={items} /> */}
        {itemsArray.map((item) => (
          <RestaurantCategoryItemCard key={item.card.info.id}  itemdata={item} />
        ))}
      </div>
    );
}

export default RestaurantCategoryItemList