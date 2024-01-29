// importing components:
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
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

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default AppLayout;