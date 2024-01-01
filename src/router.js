import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import Search from "./Pages/Search";
import SingleMovie from "./Pages/SingleMovies";
import Login from "./Pages/Login";
import Licens from "./Pages/licenes_page";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
      path: "/item/:id",
      element: <SingleMovie />,
    },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/licens",
    element: <Licens />,
  },

]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
