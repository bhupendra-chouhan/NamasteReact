import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
// import Grocery from "./Grocery";
import Error from "./Error";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";

const Grocery = lazy(() => import("./Grocery"));

const Routing = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/my-cart",
          element: <Cart />,
        },
        {
          path: "/grocery",
          element: <Grocery />,
        },
        {
          path: "/restaurants/:resId", // "/:resId" This part of the URL is Dynamic. This resId can be changed according to the ID of the restaurant.
          element: <RestaurantMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Routing;
