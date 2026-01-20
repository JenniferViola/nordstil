// components/layout/Header.jsx
import { useEffect } from "react";
import { Link } from "react-router";
import {
  FaBars,
  FaHeart,
  FaBasketShopping,
  FaXmark,
  FaUser,
} from "react-icons/fa6";
import IconButton from "@/components/ui/IconButton";
import Logo from "@/components/ui/brand/Logo";
import {
  SearchMobile,
  SearchToggle,
  SearchDesktop,
} from "@/components/ui/Search";

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
  useEffect(() => {
    const header = document.querySelector("header");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="py-3 sm:py-3 sticky top-0 z-50 w-full max-h-20 transition-all
        duration-300 bg-secondary-100 text-primary-800-500"
    >
      <div
        id="header-container"
        className="mx-auto grid max-w-350 grid-cols-[1fr_auto_1fr] items-center
          justify-center px-4 lg:px-6"
      >
        <div className="flex items-center justify-start">
          {/* MOBILE NAV/SEARCH TOGGLE */}
          <div className="flex gap-4 text-primary">
            {/* NAV TOGGLE */}
            <button
              onClick={onToggleMenu}
              className="lg:hidden z-50"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>

            {/* SEARCH TOGGLE */}
            <SearchToggle
              onToggleSearch={onToggleSearch}
              searchOpen={searchOpen}
            />
          </div>

          {/* NAV - DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">
            {["Home", "Shop", "Magazine"].map((item) => (
              <Link
                key={item}
                to="/"
                className="relative text-[0.85rem] font-medium tracking-wide
                  text-body transition-colors duration-200
                  hover:text-primary-900"
              >
                {item}
                <span
                  className="absolute left-0 -bottom-1 h-px w-full bg-current
                    scale-x-0 origin-left transition-transform duration-200
                    hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* LOGO */}
        <Logo />

        {/* ACTIONS */}
        <div className="flex items-center justify-end gap-4">
          <SearchDesktop />

          <div className="flex items-center gap-1 text-primary-500">
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

      <SearchMobile searchOpen={searchOpen} />

      {/* Mobile nav */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-secondary-100 text-body
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
      >
        <nav className="flex h-full flex-col px-6 pt-16">
          <div className="flex flex-col gap-6">
            {["Home", "Shop", "Magazine"].map((item) => (
              <Link
                key={item}
                to="/"
                className="text-2xl font-medium tracking-tight hover:opacity-60
                  transition"
                onClick={onClose}
              >
                {item}
              </Link>
            ))}
          </div>

          <div
            className="mt-10 border-t border-body/20 pt-6 flex flex-col gap-4"
          >
            {["New Arrivals", "Best Sellers", "Clothing"].map((item) => (
              <Link
                key={item}
                to="/"
                className="text-base font-normal hover:opacity-60 transition"
                onClick={onClose}
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="mt-auto pb-10">
            <Link
              to="/account"
              className="flex items-center gap-3 text-sm font-medium
                hover:opacity-60 transition"
              onClick={onClose}
            >
              <FaUser size={16} />
              My Account
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
