import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = ({ resData }) => {
  // Creating a Local State Variable:
  const [topResData, setTopResData] = useState(resData);
  const [deliveryUnderTwentyData, setDeliveryUnderTwentyData] =
    useState(resData);
  
  const [dataToRender, setDataToRender] = useState(resData);

  console.log(dataToRender);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn top-res"
          onClick={() => {
            setTopResData(
              topResData.filter((resEle) => resEle.info.avgRating > 4.2)
            );
            setDataToRender(topResData);
          }}
        >
          Top Rate Restaurant
        </button>

        <button
          className="filter-btn delivery-under-twenty"
          onClick={() => {
            setDeliveryUnderTwentyData(
              deliveryUnderTwentyData.filter(
                (resEle) => resEle.info.sla.deliveryTime <= 20
              )
            );
            setDataToRender(deliveryUnderTwentyData);
          }}
        >
          Delivery under 20 Min
        </button>
      </div>

      <div className="res-container">
        {dataToRender.map((resEle) => {
          return (
            <RestaurantCard resObejectData={resEle} key={resEle.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
