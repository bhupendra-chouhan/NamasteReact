import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Creating a Local State Variable:
  const [dataToRender, _setDataToRender] = useState([]);

  // _setTopResData(topResData.filter(resEle => resEle.info.avgRating > 4.2));

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const dataJSON = await data.json();
    console.log(dataJSON);
    const valueToRender = dataJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    _setDataToRender(valueToRender);
  }

  return dataToRender.length === 0 ? <Shimmer/>: (
    <div className="body">
      <div className="filter">
        <button className="filter-btn top-res" onClick={()=>_setDataToRender(dataToRender.filter(resEle => resEle.info.avgRating > 4.2))}>
          Top Rate Restaurant
        </button>

        <button
          className="filter-btn clear-filter"
          onClick={() => {
            _setDataToRender(dataToRender);
            console.log(dataToRender);
          }}
        >
          Clear All Filters
        </button>
      </div>

      <div className="res-container">
        {dataToRender.length === 0
          ? <h1>Loading....</h1>
          : dataToRender?.map((resEle) => {
              return (
                <RestaurantCard resObejectData={resEle} key={resEle.info.id} />
              );
            })}
      </div>
    </div>
  );
};

export default Body;