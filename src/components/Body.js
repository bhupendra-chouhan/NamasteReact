import RestaurantCard from "./RestaurantCard";
import Search from "./Search";


const Body = (props) => {
  return (
    <div className="body">
      <div className="search">Search BOX</div>
      <div className="res-container">
        {props.resData.map((resEle) => {
          return (
            <RestaurantCard resObejectData={resEle} key={resEle.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
