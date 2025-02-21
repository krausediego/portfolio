import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { inject } from "@vercel/analytics";

inject();

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
