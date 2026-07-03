import AdminNavbar from "@/pages/Admin/_components/AdminNavbar";
import AdminSidebar from "@/pages/Admin/_components/AdminSidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

export default function AdminLayout() {
  return (
    <div className="h-screen flex bg-[#f8f9fc] overflow-hidden">

      {/* Sidebar */}
      <aside className="w-[280px] shrink-0">
        <AdminSidebar />
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Top Navbar */}
        <AdminNavbar />
        
        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
          <Toaster richColors position="top-center" />
        </main>

      </div>
    </div>
  );
}