// importing components:
import Header from "./Header";
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

const AppLayout = ({applayout_outlet}) => (
  <div className="app">
    <Header />
    {applayout_outlet}
    <Footer />
  </div>
);

export default AppLayout;