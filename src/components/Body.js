import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_FETCH_API_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/contexts/UserContext";

const Body = () => {
  // Creating a Local State Variable:
  const [dataToRender, _setDataToRender] = useState([]);
  const [filterdData, _setFilterdData] = useState([]);
  const [searchText, _setSearchText] = useState("");

  const {loggedInUser, _setUserName } = useContext(UserContext);

  // Whenever a state variables updates, react triggers a reconciliation cycle(re-renders the conponents).
  console.log("Body is Rerendered...");

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_FETCH_API_LINK); // fetch() --> returns a Promise

    const dataJSON = await data.json();
    // console.log(dataJSON);
    const valueToRender =
      dataJSON?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    _setDataToRender(valueToRender);
    _setFilterdData(valueToRender);
  };

  const clearFilterHandler = () => {
    _setFilterdData(dataToRender);
  };

  const VegRestaurantCard = withVegLabel(RestaurantCard); // For Veg Restaurants

  return dataToRender.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body flex flex-col justify-center">
      <div className="flex flex-col md:flex-row w-max my-3 mx-auto">
        {/* Search Box */}
        <div className="p-3 flex w-max justify-between rounded-xl">
          <input
            className="mx-2 px-2 border border-gray-600 rounded-xl"
            placeholder="search keywords..."
            value={searchText}
            onChange={(e) => {
              _setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="border p-1 bg-green-400 border-gray-600 rounded-xl"
            type="submit"
            onClick={() => {
              _setFilterdData(
                dataToRender.filter((resEle) => {
                  return resEle.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                })
              );
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="top-res border bg-orange-400 border-gray-600 rounded-xl cursor-pointer p-2 w-fit m-2"
            onClick={() =>
              _setFilterdData(
                filterdData.filter((resEle) => resEle.info.avgRating > 4.2)
              )
            }
          >
            Top Rated Restaurant
          </button>

          <button
            className="border bg-red-500 border-gray-600  rounded-xl text-white cursor-pointer w-fit p-2 m-2"
            onClick={() => {
              clearFilterHandler();
            }}
          >
            Clear All Filters
          </button>
        </div>

        <div className="p-3 flex w-max justify-between rounded-xl">
          <input
            className="mx-2 px-2 border border-gray-600 rounded-xl"
            placeholder="Set new username "
            value={loggedInUser}
            onChange={(e) => {
              _setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {filterdData?.map((resEle) => {
          return (
            <Link
              to={"/restaurants/" + resEle.info.id}
              className="w-80 sm:w-60 p-2 m-4 bg-gray-200 border-gray-shimmer border-solid border-2 rounded-2xl min-w-20 min-h-25 hover:bg-orange-400 hover:cursor-pointer"
              key={resEle.info.id}
            >
              {resEle.info.veg ? (
                <VegRestaurantCard resObejectData={resEle} />
              ) : (
                <RestaurantCard resObejectData={resEle} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
