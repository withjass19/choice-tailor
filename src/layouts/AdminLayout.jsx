import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "@/pages/Admin/_components/AdminNavbar";
import AdminSidebar from "@/pages/Admin/_components/AdminSidebar";
import { Toaster } from "@/components/ui/sonner";

export default function AdminLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8f9fc]">
      <div className="hidden lg:flex lg:w-[280px] lg:shrink-0 lg:overflow-hidden">
        <AdminSidebar />
      </div>

      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-[280px] shrink-0 transition-transform duration-300 lg:hidden ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <AdminSidebar onNavigate={() => setMobileSidebarOpen(false)} />
      </div>

      <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
        <div className="border-b bg-white/95 backdrop-blur lg:hidden">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="rounded-md border border-gray-200 p-2"
            >
              <Menu size={18} />
            </button>
            <div className="text-sm font-semibold text-[#061735]">Admin Panel</div>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="rounded-md border border-gray-200 p-2"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <AdminNavbar />

        <main className="flex-1 overflow-y-auto px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
          <Outlet />
          <Toaster richColors position="top-center" />
        </main>
      </div>
    </div>
  );
}