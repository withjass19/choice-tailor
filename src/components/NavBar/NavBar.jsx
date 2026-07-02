import { useState } from "react";
import { Menu, X, ChevronDown, ShoppingCart } from "lucide-react";
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

  // Abhi temporary hai. Baad me cart context / Supabase se aayega.
  const cartCount = 0;

  const login = () => {
    navigation("/login");
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex w-[90%] items-center justify-between py-4">
        <Link
          to="/"
          className="flex cursor-pointer flex-row items-center gap-3"
        >
          <img
            src={logo}
            alt="Choice Tailor"
            className="h-12 w-12 object-contain"
          />

          <div>
            <h2 className="text-lg font-bold md:text-xl">CHOICE TAILOR</h2>
            <p className="text-xs text-gray-600">
              Perfect Fit for Every Mission
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 font-medium lg:flex">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 outline-none hover:text-[#b89b3c]">
              Uniforms
              <ChevronDown size={16} />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-52">
              <DropdownMenuItem asChild>
                <Link to="/shop">Service Uniform</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/shop">Flying Overall</Link>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link to="/shop">Combat Uniform</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/">Track Order</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          {isAuthenticated ? (
            <UserDropdown
              user={user}
              profile={profile}
              logoutUser={logoutUser}
            />
          ) : (
            <button
              onClick={login}
              className="rounded-lg border border-gray-300 px-6 py-2"
            >
              Login
            </button>
          )}

          <Link
            to="/cart"
            className="relative flex items-center gap-2 rounded-lg bg-[#061735] px-5 py-2 text-white transition hover:bg-[#0b2758]"
          >
            <ShoppingCart size={20} />
            <span className="font-medium">Cart</span>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#b89b3c] text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="mx-auto flex w-[90%] flex-col gap-4 py-4">
            <Link to="/" onClick={closeMobileMenu}>
              Home
            </Link>

            <Link to="/shop" onClick={closeMobileMenu}>
              Shop
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 outline-none hover:text-[#b89b3c]">
                Uniforms
                <ChevronDown size={16} />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" className="w-52">
                <DropdownMenuItem asChild>
                  <Link to="/shop" onClick={closeMobileMenu}>
                    Service Uniform
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/shop" onClick={closeMobileMenu}>
                    Flying Overall
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link to="/shop" onClick={closeMobileMenu}>
                    Combat Uniform
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/" onClick={closeMobileMenu}>
              Track Order
            </Link>

            <Link to="/about" onClick={closeMobileMenu}>
              About
            </Link>

            <Link to="/contact" onClick={closeMobileMenu}>
              Contact Us
            </Link>

            <div className="flex flex-col gap-3 pt-4">
              {isAuthenticated ? (
                <UserDropdown
                  user={user}
                  profile={profile}
                  logoutUser={logoutUser}
                />
              ) : (
                <button
                  onClick={() => {
                    login();
                    closeMobileMenu();
                  }}
                  className="rounded-lg border border-gray-300 py-2"
                >
                  Login
                </button>
              )}

              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="relative flex items-center justify-center gap-2 rounded-lg bg-[#061735] py-2 text-white"
              >
                <ShoppingCart size={20} />
                Cart

                {cartCount > 0 && (
                  <span className="absolute right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#b89b3c] text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}