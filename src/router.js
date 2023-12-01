import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  // {
  //     path: "/item/:id",
  //     element: <SingleMovie />,
  //   },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}
