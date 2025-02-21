import { RouterProvider, useLocation } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { inject } from "@vercel/analytics";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

inject();

export function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   // Isso força a atualização do Helmet ao mudar de rota
  // }, [location.pathname]);

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={routes} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
