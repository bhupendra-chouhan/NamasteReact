import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
// import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
// import Grocery from "./Grocery";
import Error from "./Error";
import Body from "./Body";
import RestaurantMenu from "./RestaurantMenu";
import Shimmer from "./Shimmer";

const Grocery = lazy(() => import("./Grocery")); // Lazy Loading Grocery Component
const About = lazy(() => import("./About")); // Lazy Loading About Component

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
          element: (
            <Suspense fallback={<Shimmer />}>
              <About />
            </Suspense>
          ),
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
          element: (
            <Suspense fallback={<h1>Loading Grocery.....</h1>}>
              <Grocery />
            </Suspense>
          ),
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