import { Header } from "@/components/header";
import { Outlet, useLocation } from "react-router-dom";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen max-w-6xl mx-auto lg:p-10 p-2 flex-col antialiased">
      <Header />

      <Outlet key={location.pathname} />
    </div>
  );
}
