import { RESTAURANT_MENU_FETCH_API_LINK } from "../constants";
import { useState, useEffect } from "react";

// using custom hook to fetch Restaurant Menu items Data
const useRestaurantMenu = (resId) => {
  const [resInfo, _setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menuData = await fetch(RESTAURANT_MENU_FETCH_API_LINK + resId);
    const menuDataJSON = await menuData.json();
    const valueToRender = menuDataJSON.data;
    _setResInfo(valueToRender);
  };
  //   console.log(resInfo);
  return resInfo;
};

export default useRestaurantMenu;
