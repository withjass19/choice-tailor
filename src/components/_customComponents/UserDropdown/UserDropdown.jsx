import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  User,
  ClipboardList,
  Ruler,
  MapPin,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

export default function UserDropdown({ user, profile, logoutUser }) {
    const navigate = useNavigate();

  const userName =
    profile?.full_name ||
    user?.user_metadata?.full_name ||
    user?.email ||
    "User";

  const initial = userName.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-3 rounded-lg border px-4 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#061735] text-white">
            {initial}
          </div>

          <span className="font-medium">{userName}</span>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>
          <Link to="/dashboard" className="flex items-center gap-3">
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/dashboard/orders" className="flex items-center gap-3">
            <ClipboardList size={16} />
            My Orders
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link
            to="/dashboard/measurements"
            className="flex items-center gap-3"
          >
            <Ruler size={16} />
            Measurement Profiles
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/dashboard/addresses" className="flex items-center gap-3">
            <MapPin size={16} />
            Addresses
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Link to="/dashboard/profile" className="flex items-center gap-3">
            <User size={16} />
            Profile Settings
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={async () => {
            try {
              await logoutUser();
              navigate("/");
            } catch (error) {
              console.error(error);
            }
          }}
          className="text-red-600"
        >
          <LogOut size={16} />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
