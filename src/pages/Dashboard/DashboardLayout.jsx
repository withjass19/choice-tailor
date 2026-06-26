import { Outlet } from "react-router-dom";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout() {
  return (
    <section className="bg-[#f8f9fc] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
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