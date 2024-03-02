// importing components:
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
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
    --<Copyright/>
    --<Links/>
    --<Address/>
    --<Contact/>
*/

const AppLayout = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="app">
      <Header />
      {onlineStatus === "🔴 Not Connected" ? (
        <h1>You are offline. Please check your connection!!..</h1>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default AppLayout;
