import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/customHooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // --------
  const resInfo = useRestaurantMenu(resId);
  // --------

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, id, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards, title } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);
  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);

  return (
    <div>
      <div className="flex my-0 justify-center mx-auto">
        <h1 className="p-4 text-orange-600 text-2xl">
          {name}, ID : {id}
        </h1>
        <h2 className="p-4 text-orange-600 text-2xl">Cuisines:</h2>
        <h3 className="p-4 text-orange-600 text-2xl">{cuisines.join(", ")}</h3>

        <h2 className="p-4 text-orange-600 text-2xl">Menu:</h2>
      </div>
      <div>
        <label htmlFor="recommended_menu_item" className="flex justify-center text-[2rem]">{title}({itemCards.length})</label>
        <table id="recommended_menu_item" className="mx-auto">
          <thead className="border-b-2 border-dashed border-blue-700 text-orange-400">
            <tr>
              <th className="border-r-2 border-blue-700 border-dashed">ID</th>
              <th className="border-r-2 border-blue-700 border-dashed">Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {itemCards?.map((item) => (
              <tr key={item?.card?.info?.id}>
                <td className="border-r-2 border-blue-700 border-dashed px-3">
                  {item?.card?.info?.id}
                </td>
                <td className="border-r-2 border-blue-700 border-dashed px-3">
                  {item?.card?.info?.name}
                </td>
                <td className="px-3">
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}{" "}
                  Rs
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantMenu;
