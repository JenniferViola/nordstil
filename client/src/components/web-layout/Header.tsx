// components/layout/Header.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  FaBars,
  FaHeart,
  FaMagnifyingGlass,
  FaBasketShopping,
  FaXmark,
  FaUser,
} from "react-icons/fa6";
import IconButton from "@/components/ui/IconButton";

type Props = {
  menuOpen: boolean;
  searchOpen: boolean;
  onToggleMenu: () => void;
  onToggleSearch: () => void;
  onClose: () => void;
};

export default function Header({
  menuOpen,
  searchOpen,
  onToggleMenu,
  onToggleSearch,
  onClose,
}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        isScrolled ? "shadow-md py-1 bg-primary-500/95" : "py-2 sm:py-2"
      }
        sticky top-0 z-50 w-full max-h-20 transition-all duration-300
        bg-primary-500 text-secondary-500 border-b border-secondary-300/30`}
    >
      <div
        id="header-container"
        className="mx-auto grid max-w-350 grid-cols-[1fr_auto_1fr] items-center
          px-4 lg:px-6"
      >
        {/* NAV */}
        <div className="flex items-center justify-start">
          <button
            onClick={onToggleMenu}
            className="lg:hidden p-2 -ml-2 hover:text-primary-900
              transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaXmark size={22} /> : <FaBars size={20} />}
          </button>

          <nav className="hidden lg:flex gap-8">
            {["Home", "Shop", "About"].map((item) => (
              <Link
                key={item}
                to="/"
                className="group relative text-sm font-semibold tracking-wide
                  hover:text-primary-900 transition-colors"
              >
                {item}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary-900
                    transition-all duration-300 group-hover:w-full"
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* LOGO */}
        <div className="flex">
          <Link to="/" className="relative block group">
            <img
              src="/images/nordstil-logo-header-light.webp"
              alt="Nordstil"
              className={`transition-all duration-300 mb-1 ${
                isScrolled ? "h-10 lg:h-12" : "h-12 lg:h-14"
              }`}
            />
          </Link>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-end gap-4">
          {/* Search mobile */}
          <Link
            to="/search"
            className="lg:hidden hover:scale-110 transition-transform"
            onClick={onToggleSearch}
            aria-label="Toggle Search"
          >
            <FaMagnifyingGlass size={18} />
          </Link>

          {/* Search desktop */}
          <div className="hidden lg:flex items-center w-70">
            <div className="relative w-full flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 pr-8 py-1 bg-transparent border-b
                  border-secondary-500/50 text-sm text-secondary-100
                  placeholder:text-secondary-500/50 focus:outline-none
                  focus:border-secondary-100 transition-all duration-300
                  ease-out"
              />
              <Link
                to="/search"
                className="z-10 hover:scale-110 transition-transform p-1"
                aria-label="Search"
              >
                <FaMagnifyingGlass size={18} />
              </Link>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-1 text-secondary-500">
            <IconButton
              icon={<FaHeart size={18} />}
              href="/favorites"
              label="Favorites"
            />
            <IconButton
              icon={<FaBasketShopping size={18} />}
              href="/cart"
              label="Cart"
            />
          </div>
        </div>
      </div>

      {/* Mobile search */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full bg-primary-500
          overflow-hidden transition-all duration-250 border-b
          border-secondary-300/20 ${
            searchOpen
              ? "max-h-20 opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="px-4 py-3 flex items-center justify-center">
          <input
            autoFocus={searchOpen}
            type="text"
            placeholder="Search products..."
            className="w-full max-w-md bg-secondary-100/10 rounded-xl px-4 py-2
              text-sm text-secondary-100 focus:outline-none focus:ring-1
              focus:ring-secondary-300"
          />
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={`shadow-xl lg:hidden absolute left-0 top-full w-[60%]
          min-h-screen bg-primary-500 text-secondary-400 transition-all
          duration-250 ease-in-out
          ${menuOpen ? "block pointer-events-auto" : "hidden pointer-events-none"}`}
      >
        <nav className="flex min-h-screen flex-col px-4 pt-6 pb-10 gap-2">
          {["Home", "Magazine", "About"].map((item) => (
            <Link
              key={item}
              to="/"
              className="w-full py-2.5 px-2 font-medium hover:text-primary-900
                transition-colors"
              onClick={onClose}
            >
              {item}
            </Link>
          ))}

          <div className="border-t border-secondary-400/40" />

          {["New Arrivals", "Best Sellers", "Clothing"].map((item) => (
            <Link
              key={item}
              to="/"
              className="w-full py-2.5 px-2 font-medium hover:text-primary-900
                transition-colors"
              onClick={onClose}
            >
              {item}
            </Link>
          ))}

          <div className="mt-14 pt-4 flex flex-col gap-1">
            <div className="flex items-center">
              <FaUser
                size={18}
                style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))" }}
              />
              <Link
                to="/account"
                className="py-3 px-2 text-sm font-light hover:text-primary-900
                  transition-colors"
                onClick={onClose}
              >
                My Account
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
