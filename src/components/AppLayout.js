// importing components:
import Header from "./Header";
import Body from "./Body";
import {resData} from "../utils/resData";
import Footer from "./Footer";

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
    <Body resData={resData} />
    <Footer />
  </div>
);

export default AppLayout;