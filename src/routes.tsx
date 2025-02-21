import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layout/app";
import { HomePage } from "./pages/pages/home/home";
import { AboutPage } from "./pages/pages/about/about";
import { ProjectsPage } from "./pages/pages/projects/projects";
import { ContactPage } from "./pages/pages/contact/contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
