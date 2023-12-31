import React from "react";
import ReactDOM from "react-dom/client";

/*
Basic Components Layout for out app:

<Header/>
  -<Logo/>
  -<NavItems/>
<Body/>
  -<Search/>
  -<RestaurantContainer/>
    --<RestaurantCard/>
      ---Img
      ---Name of the Restaurant, Start Rating, cuisine, Delivery Time
<Footer/>
    -<Copyright/>
    -<Links/>
    -<Address/>
    -<Contact/>
*/

/* Styling Section: START*/

const styleResCard = {
  backgroundColor: "grey",
  color: "white",
};

/* Styling Section: END*/

/* Component Section: START */

const Header = () => (
  <div className="header">
    <div>
      <img
        className="logo"
        src="https://png2.cleanpng.com/sh/d27718d216ae87372e252b1e8310fae4/L0KzQYm3VMIxN6h9j5H0aYP2gLBuTgJma5p1fZ9sb3BuebBuTfNpbZcyfNt8aD3pf7FrTcVibGpnfaYBOHG2crS4TsEyOWMATqo7MUW1RIO4WcQ3OmY7TqQ3cH7q/kisspng-recipe-cooking-chef-dish-food-5ad9be468a3bc1.1112968215242194625662.png"
        alt="company logo"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li key={0}>Home</li>
        <li key={1}>About Us</li>
        <li key={2}>Contact Us</li>
        <li key={3}>CartIcon</li>
      </ul>
    </div>
  </div>
);

const Search = () => {};

const RestaurantCard = ({resname, cuisine, rating, deliverytime}) => {
  return (
    <div className="res-card" style={styleResCard}>
      <img
        className="foodLogo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/bgqoc4mrafqlmj1zv49n"
        alt="food-logo"
      />
      <h2>{resname}</h2>
      <h5>{cuisine}</h5>
      <h4>{rating}</h4>
      <h4>{deliverytime} minutes</h4>
    </div>
  );
};

const Body = () => (
  <div className="body">
    <div className="search">Search BOX</div>
    <div className="res-container">
      <RestaurantCard
        resname="Meghana Foods"
        cuisine="Biryani, North Indiam, South Indian, Chinese, Seafood"
        rating="4.5"
        deliverytime="38"
      />
    </div>
  </div>
);

const Footer = () => <div className="footer"></div>;

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>
);

/* Component Section: END */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
