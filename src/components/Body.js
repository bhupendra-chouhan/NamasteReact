import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = ({ resData }) => {
  // Creating a Local State Variable:
  const [topResData, _setTopResData] = useState(resData);
  const [deliveryUnderTwentyData, _setDeliveryUnderTwentyData] =
    useState(resData);

  const [dataToRender, _setDataToRender] = useState([]);

  const eventHandler = (_e) => {
    _setTopResData(resData.filter((resEle) => resEle.info.avgRating > 4.2));
    _setDataToRender(topResData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn top-res" onClick={eventHandler}>
          Top Rate Restaurant
        </button>

        <button
          className="filter-btn delivery-under-twenty"
          onClick={() => {
            _setDeliveryUnderTwentyData(
              deliveryUnderTwentyData.filter(
                (resEle) => resEle.info.sla.deliveryTime <= 20
              )
            );
            _setDataToRender(deliveryUnderTwentyData);
          }}
        >
          Delivery under 20 Min
        </button>

        <button
          className="filter-btn clear-filter"
          onClick={() => {
            _setDataToRender([]);
          }}
        >
          Clear All Filters
        </button>
      </div>

      <div className="res-container">
        {dataToRender.length == 0
          ? resData.map((resEle) => {
              return (
                <RestaurantCard resObejectData={resEle} key={resEle.info.id} />
              );
            })
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
