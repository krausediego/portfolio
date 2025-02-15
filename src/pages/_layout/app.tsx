import { Header } from "@/components/header";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <div className="flex min-h-screen max-w-6xl mx-auto p-10 flex-col antialiased">
      <Header />

      <Outlet />
    </div>
  );
}
