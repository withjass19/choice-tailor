import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { logo } from "../../assets/images";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

import UserDropdown from "../_customComponents/UserDropdown/UserDropdown";
import CartDrawer from "@/components/Cart/CartDrawer";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const { user, profile, isAuthenticated, logoutUser } = useAuth();
  const { totalQuantity, setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const login = () => navigate("/login");

  const closeMobileMenu = () => setIsOpen(false);

  const openCart = () => setCartOpen(true);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-all duration-300 ${
          isScrolled
            ? "shadow-lg shadow-black/5"
            : "shadow-none"
        }`}
      >
        <div
          className={`mx-auto flex w-[90%] items-center justify-between transition-all duration-300 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Choice Tailor"
              className={`object-contain transition-all duration-300 ${
                isScrolled ? "h-10 w-10" : "h-12 w-12"
              }`}
            />

            <div>
              <h2 className="text-lg font-bold md:text-xl">CHOICE TAILOR</h2>
              <p className="text-xs text-gray-600">
                Perfect Fit for Every Mission
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 font-medium lg:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/track-order">Track Order</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
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
                type="button"
                onClick={login}
                className="rounded-lg border-[2.5px] border-gray-300 px-6 py-2 transition hover:border-[#061735] hover:bg-[#061735] hover:text-white"
              >
                Login
              </button>
            )}

            <button
              type="button"
              onClick={openCart}
              className="relative rounded-full p-2 transition hover:bg-gray-100 hover:scale-105"
            >
              <ShoppingCart size={24} className="text-[#061735]" />

              {totalQuantity > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-[#b89b3c] text-[10px] font-bold text-white">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t bg-white transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto flex w-[90%] flex-col gap-4 py-4">
            <MobileLink to="/" onClick={closeMobileMenu}>Home</MobileLink>
            <MobileLink to="/shop" onClick={closeMobileMenu}>Shop</MobileLink>
            <MobileLink to="/track-order" onClick={closeMobileMenu}>Track Order</MobileLink>
            <MobileLink to="/about" onClick={closeMobileMenu}>About</MobileLink>
            <MobileLink to="/contact" onClick={closeMobileMenu}>Contact Us</MobileLink>

            <div className="flex flex-col gap-3 pt-4">
              {isAuthenticated ? (
                <UserDropdown
                  user={user}
                  profile={profile}
                  logoutUser={logoutUser}
                />
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    login();
                    closeMobileMenu();
                  }}
                  className="rounded-lg border-[2px] border-gray-300 py-2 transition hover:border-[#061735] hover:bg-[#061735] hover:text-white"
                >
                  Login
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  openCart();
                }}
                className="relative flex items-center justify-center gap-2 rounded-lg bg-[#061735] py-2 text-white"
              >
                <ShoppingCart size={20} />
                Cart

                {totalQuantity > 0 && (
                  <span className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#b89b3c] text-[10px] font-bold text-white">
                    {totalQuantity}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer />
    </>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="relative transition hover:text-[#b89b3c] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#b89b3c] after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="rounded-lg px-3 py-2 transition hover:bg-[#f6efe1] hover:text-[#b89b3c]"
    >
      {children}
    </Link>
  );
}