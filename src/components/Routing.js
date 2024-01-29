import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./AppLayout"
import About from "./About"
import Contact from "./Contact"
import Cart from "./Cart"
import Error from "./Error"
import Body from "./Body"

const Routing = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                },
                {
                    path: "/my-cart",
                    element: <Cart/>,
                },
            ],
            errorElement: <Error/>,
        },
    ])    
    
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Routing