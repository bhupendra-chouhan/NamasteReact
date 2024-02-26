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

  const { name, id, cuisines } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="res-menu-container">
      <h1>
        {name}, ID : {id}
      </h1>
      <h2>Cuisines:</h2>
      <h3>{cuisines.join(", ")}</h3>

      <h2>Menu:</h2>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {itemCards?.map((item) => (
              <tr key={item?.card?.info?.id}>
                <td>{item?.card?.info?.id}</td>
                <td>{item?.card?.info?.name}</td>
                <td>
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
