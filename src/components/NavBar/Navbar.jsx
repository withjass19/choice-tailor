import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { logo } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import UserDropdown from "../_customComponents/UserDropdown/UserDropdown";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();
   const { user, profile, isAuthenticated, logoutUser } = useAuth();

  const login = () => {
    navigation("/login")
  }

  return (
    <nav className="w-full border-b bg-white">
      <div className="w-[90%] mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-row items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Choice Tailor"
            className="w-12 h-12 object-contain"
          />

          <div>
            <h2 className="text-lg md:text-xl font-bold">CHOICE TAILOR</h2>
            <p className="text-xs text-gray-600">
              Perfect Fit for Every Mission
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
           {/* Uniform Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 outline-none hover:text-[#b89b3c]">
              Uniforms
              <ChevronDown size={16} />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuItem asChild>
                <Link to="/shop">
                  Service Uniform
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/shop">
                  Flying Overall
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/shop">
                  Combat Uniform
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Link to="/">Uniform</Link> */}
          {/* <Link to="/">Accessories</Link> */}
          {/* <Link to="/">Measurement Guide</Link> */}
          <Link to="/">Track Order</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {/* <button onClick={login} className="border border-gray-300 px-6 py-2 rounded-lg">
            Login
          </button> */}
          {isAuthenticated ? <UserDropdown
          user={user}
          profile={profile}
          logoutUser={logoutUser}
        /> : (<button onClick={login} className="border border-gray-300 px-6 py-2 rounded-lg">
            Login
          </button>
          )}

          <button className="bg-[#b89b3c] text-white px-6 py-2 rounded-lg">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="w-[90%] mx-auto flex flex-col py-4 gap-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
             {/* Uniform Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 outline-none hover:text-[#b89b3c]">
              Uniforms
              <ChevronDown size={16} />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuItem asChild>
                <Link to="/shop">
                  Service Uniform
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/shop">
                  Flying Overall
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/shop">
                  Combat Uniform
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
            {/* <Link to="/">Uniform</Link> */}
            {/* <Link to="/">Accessories</Link> */}
            {/* <Link to="/">Measurement Guide</Link> */}
            <Link to="/">Track Order</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact Us</Link>

            <div className="flex flex-col gap-3 pt-4">
              <button onClick={login} className="border border-gray-300 py-2 rounded-lg">
                Login
              </button>

              <button className="bg-[#b89b3c] text-white py-2 rounded-lg">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
