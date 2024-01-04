const Search = (props) => {
  return (
    <div className="filter">
      <button
        className="filter-btn"
        onClick={() => {
          resData = props.resData.filter((resEle) => resEle.info.avgRating >= 4);
        }}
      >
        Top Rate Restaurant
      </button>
    </div>
  );
};

export default Search;
