// importing components:
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";
import UserContext from "../utils/contexts/UserContext";
import {Provider} from "react-redux"
import appStore from "../utils/store/appStore";
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
      user_name_is: "HERO",
    };
    _setUserName(data.user_name_is);
  }, []);

  const onlineStatus = useOnlineStatus();
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, _setUserName }}>
        {/* Overriding the 'loggedInUser' value present inside the 'UserContext.js' context and also adding/passing '_setUserName' method to the context  . (Providing context to all the components) */}
        {/* Here loggedInUser = "Hero Hu" */}
        <div className="app">
          {/* <UserContext.Provider value={{ loggedInUser: "Thomas Edison" }}> */}
          {/* Providing nested 'UserContext' and Overriding the 'loggedInUser' value (Providing context to only the 'Header' component) */}
          {/* Here loggedInUser = "Thomas Edison" */}
          <Header />
          {/* </UserContext.Provider> */}

          <div className="md:mt-28">
            {onlineStatus === "🔴 Not Connected" ? (
              <h1>You are offline. Please check your connection!!..</h1>
            ) : (
              <Outlet />
            )}
          </div>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
