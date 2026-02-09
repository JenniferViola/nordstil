// Header.jsx
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { useCart } from "@/components/context/CartContext";
import {
  SearchMobile,
  SearchDesktop,
  SearchToggle,
} from "@/components/features/Search";

import { SlBag, SlHeart, SlMenu, SlUser } from "react-icons/sl";
import { TfiClose } from "react-icons/tfi";

import IconButton from "@/components/ui/IconButton";
import Logo from "@/components/ui/brand/Logo";

type Props = {
  menuOpen: boolean;
  searchOpen: boolean;
  onToggleMenu: () => void;
  onToggleSearch: () => void;
  onClose: () => void;
};

export default function Header({ menuOpen, onToggleMenu, onClose }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { items } = useCart();
  const mainLinks = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Shop", url: "/search" },
    { id: 3, title: "Magazine", url: "/magazine" },
  ];
  const promoLinks = [
    { id: 1, title: "New Arrivals", url: "/search" },
    { id: 2, title: "Bestsellers", url: "/search" },
    { id: 3, title: "Tops", url: "/search?query=tops" },
  ];

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

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
        className="grid w-full px-2 sm:px-4 grid-cols-[1fr_auto_1fr]
          items-center justify-center max-w-[120rem] mx-auto"
      >
        <div className="flex items-center justify-start">
          <div className="flex gap-4 text-primary-600">
            {/* TOGGLES */}
            <button
              onClick={onToggleMenu}
              className="lg:hidden z-50"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <TfiClose size={20} /> : <SlMenu size={20} />}
            </button>

            <SearchToggle onToggle={() => setSearchOpen((prev) => !prev)} />
          </div>

          {/* NAV - DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10">
            {mainLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.url}
                className="relative text-[0.85rem] font-medium tracking-wide
                  text-body transition-colors duration-200
                  hover:text-primary-900"
              >
                {link.title}
                <span
                  className="absolute left-0 -bottom-1 h-px w-full bg-current
                    scale-x-0 origin-left transition-transform duration-200
                    hover:scale-x-100"
                />
              </NavLink>
            ))}
          </nav>
        </div>

        {/* LOGO */}
        <Logo />

        {/* ACTIONS */}
        <div className="flex items-center justify-end gap-4">
          <SearchDesktop />

          <div className="flex items-center gap-1 text-primary-600">
            <Link to={"/favorites"} id="favorites">
              <IconButton icon={<SlHeart size={20} />} label="Favorites" />
            </Link>
            <Link to={"/cart"} id="cart" className="relative">
              <IconButton icon={<SlBag size={20} />} label="Cart" />

              {totalItems > 0 && (
                <span
                  className="absolute bottom-0 -right-1 inline-flex items-center
                    justify-center h-5 w-5 text-[0.7rem] font-bold text-white
                    bg-primary-900 rounded-full shadow-sm/30"
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <SearchMobile
        searchOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {/* Mobile nav */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-secondary-100 text-body
          transition-opacity duration-200
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
      >
        <nav className="flex h-full flex-col px-6 pt-16">
          <div className="flex flex-col gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                className="text-xl font-medium tracking-tight hover:opacity-60
                  transition"
                onClick={onClose}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div
            className="mt-10 border-t border-body/20 pt-6 flex flex-col gap-4"
          >
            {promoLinks.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                className="text-base font-normal hover:opacity-60 transition"
                onClick={onClose}
              >
                {item.title}
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
              <SlUser size={16} />
              My Account
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
