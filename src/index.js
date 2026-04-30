import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import RestaurantMenu from "./components/RestaurantMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
