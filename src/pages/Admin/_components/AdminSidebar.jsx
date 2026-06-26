import {
  LayoutDashboard,
  ClipboardList,
  Ruler,
  Package,
  Users,
  FolderTree,
  Boxes,
  BarChart3,
  Settings,
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
    title: "Inventory",
    icon: Boxes,
    path: "/admin/inventory",
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

export default function AdminSidebar() {
  return (
    <aside className="w-[260px] bg-[#061735] text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">
          CHOICE TAILOR
        </h2>

        <p className="text-xs text-gray-300">
          ADMIN PANEL
        </p>
      </div>

      <div className="px-4 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3
                 ${
                   isActive
                     ? "bg-[#c89227]"
                     : "hover:bg-[#10264d]"
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