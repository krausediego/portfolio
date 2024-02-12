import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home/home";
import { AppLayout } from "./pages/_layouts/app";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // App layout.
    errorElement: <></>, // Error route.
    children: [
      {
        path: "/", // Default path.
        element: <HomePage />, // Home route.
      },
      {
        path: "*",
        element: <></>, // Not found route.
      },
    ],
  },
]);
