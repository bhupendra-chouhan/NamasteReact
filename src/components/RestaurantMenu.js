import React, {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";
import RestaurantCategoryAccordian from "./RestaurantCategoryAccordian";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // --------
  const resInfo = useRestaurantMenu(resId);
  // --------

  const [showItemsIndex, _setShowItemsIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, id, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards, title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  console.log(categories);

  return (
    <div>
      <div className="text-center my-0 items-center mx-auto">
        <h1 className="pt-4 text-gray-600 text-2xl font-bold">
          {name}, ID : {id}
        </h1>
        <h3 className="text-gray-500 text-xl">
          Cuisines:{cuisines.join(", ")}
        </h3>
      </div>

      {/* Categories Accordions */}
      <div className="flex flex-col items-center">
        {categories.map((category, index) => (
          <RestaurantCategoryAccordian
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showItemsIndex ? true : false}
            setShowItemsIndex ={()=>_setShowItemsIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
