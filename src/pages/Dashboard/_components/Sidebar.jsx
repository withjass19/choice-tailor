import {
  LayoutDashboard,
  ClipboardList,
  Ruler,
  MapPin,
  User,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="h-fit rounded-xl border bg-white p-3 sm:p-4">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
        <MenuItem to="/dashboard" icon={<LayoutDashboard size={18} />}>
          Dashboard
        </MenuItem>

        <MenuItem to="/dashboard/orders" icon={<ClipboardList size={18} />}>
          My Orders
        </MenuItem>

        <MenuItem to="/dashboard/measurements" icon={<Ruler size={18} />}>
          Measurement Profiles
        </MenuItem>

        <MenuItem to="/dashboard/addresses" icon={<MapPin size={18} />}>
          Addresses
        </MenuItem>

        <MenuItem to="/dashboard/profile" icon={<User size={18} />}>
          Profile Settings
        </MenuItem>

        <hr className="my-4" />

        <MenuItem icon={<LogOut size={18} />}>
          <button onClick={handleLogout}>Logout</button>
        </MenuItem>
      </div>
    </div>
  );
}

function MenuItem({ children, icon, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all
        ${
          isActive
            ? "bg-[#f6efe1] text-[#b89b3c] font-medium"
            : "hover:bg-gray-50 text-[#061735]"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}
