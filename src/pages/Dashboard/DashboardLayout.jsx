import { Outlet } from "react-router-dom";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout() {
  return (
    <section className="min-h-screen overflow-x-hidden bg-[#f8f9fc]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <Sidebar />

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}