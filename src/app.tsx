import { RouterProvider } from "react-router";
import { routes } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
      <Analytics />
    </ThemeProvider>
  );
}
