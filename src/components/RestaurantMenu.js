import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, _setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  fetchMenu = async () => {
    const menuData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=229&catalog_qa=undefined&submitAction=ENTER"
    );

    const menuDataJSON = await menuData.json();

    const valueToRender = menuDataJSON.data;
    // console.log(valueToRender);

    _setResInfo(valueToRender);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, id, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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
                    <td>{item?.card?.info?.price / 100}{" "}
                    Rs</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantMenu;
