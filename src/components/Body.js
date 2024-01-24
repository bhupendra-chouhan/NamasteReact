import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { COMPANY_LOGO, RESTAURANT_FETCH_API_LINK } from "../utils/constants";

const Body = () => {
  // Creating a Local State Variable:
  const [dataToRender, _setDataToRender] = useState([]);
  const [filterdData, _setFilterdData] = useState([]);
  const [searchText, _setSearchText] = useState("");

  // Whenever a state variables updates, react triggers a reconciliation cycle(re-renders the conponents).
  // console.log("Body is Rerendered...");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_FETCH_API_LINK); // fetch() --> returns a Promise

    const dataJSON = await data.json();
    // console.log(dataJSON);
    const valueToRender =
      dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    _setDataToRender(valueToRender);
  };

  const clearFilterHandler = () => {
    // resolving the fetchData() Promise
    fetchData()
      .then((result) => {
        console.warn("Fetching data successfull!!!!!", result);
      })
      .catch((error) => {
        console.error("Error in calling fetchData() async function ", error);
      });
  };

  return dataToRender.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Search Box */}
        <div className="search">
          <input
            className="search-element"
            placeholder="search keywords..."
            value={searchText}
            onChange={(e) => {
              _setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-element"
            type="submit"
            onClick={() => {
              console.log(searchText);

              _setDataToRender(
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

        <button
          className="filter-btn top-res"
          onClick={() =>
            _setDataToRender(
              dataToRender.filter((resEle) => resEle.info.avgRating > 4.2)
            )
          }
        >
          Top Rate Restaurant
        </button>

        <button
          className="filter-btn clear-filter"
          onClick={() => {
            clearFilterHandler();
            console.log(dataToRender);
          }}
        >
          Clear All Filters
        </button>
      </div>

      <div className="res-container">
        {dataToRender?.map((resEle) => {
          return (
            <RestaurantCard resObejectData={resEle} key={resEle.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
