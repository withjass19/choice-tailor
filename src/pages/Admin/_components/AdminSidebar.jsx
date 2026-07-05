import {
  LayoutDashboard,
  ClipboardList,
  Ruler,
  Package,
  Users,
  FolderTree,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },
  {
    title: "Orders",
    icon: ClipboardList,
    path: "/admin/orders",
  },
  {
    title: "Measurements",
    icon: Ruler,
    path: "/admin/measurements",
  },
  {
    title: "Products",
    icon: Package,
    path: "/admin/products",
  },
  {
    title: "Customers",
    icon: Users,
    path: "/admin/customers",
  },
  {
    title: "Categories",
    icon: FolderTree,
    path: "/admin/categories",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/admin/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default function AdminSidebar({ onNavigate }) {
  return (
    <aside className="flex h-screen w-full flex-col overflow-y-auto bg-[#061735] text-white shadow-[8px_0_30px_rgba(6,23,53,0.16)]">
      <div className="flex items-start justify-between p-6">
        <div>
          <h2 className="text-2xl font-bold">CHOICE TAILOR</h2>
          <p className="text-xs text-gray-300">ADMIN PANEL</p>
        </div>

        {onNavigate && (
          <button type="button" onClick={onNavigate} className="rounded-md p-2 text-white/80 lg:hidden">
            <X size={18} />
          </button>
        )}
      </div>

      <div className="space-y-2 px-4 pb-6">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/admin"}
              onClick={onNavigate}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  isActive ? "bg-[#c89227]" : "hover:bg-[#10264d]"
                }`
              }
            >
              <Icon size={18} />
              {item.title}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}