// importing components:
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/contexts/UserContext";
import { disconnect } from "process";
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
  const [userName, _setUserName] = useState()

  // Authentication:
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      user_name_is: "HERO HU",
    };
    _setUserName(data.user_name_is);
  }, []);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="app">
      
      <Header />
      {/* Overriding the 'loggedInUser' value present inside the 'UserContext.js' context. (Providing context to only "Outlet" components) */}
      <UserContext.Provider value={{loggedInUser: userName}}> 
        <div className="mt-28">
          {onlineStatus === "🔴 Not Connected" ? (
            <h1>You are offline. Please check your connection!!..</h1>
          ) : (
            <Outlet />
          )}
        </div>
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

export default AppLayout;
