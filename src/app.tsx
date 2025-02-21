import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { inject } from "@vercel/analytics";
import { HelmetProvider } from "react-helmet-async";

inject();

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={routes} />
      </ThemeProvider>
    </HelmetProvider>
  );
}
