// /components/Layout.jsx
import { useState, useEffect } from "react";
import {
  FaBars,
  FaHeart,
  FaMagnifyingGlass,
  FaBasketShopping,
  FaXmark,
  FaUser,
} from "react-icons/fa6";

export default function Layout(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const headerOpen = menuOpen || searchOpen;

  const siteLinks = ["Home", "Magazine", "About"];
  const promotionLinks = ["New Arrivals", "Best Sellers", "Clothing"];
  const userLinks = ["My Account", "Favorites"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper Component for Icons to reduce repetition
  const ActionButton = ({ icon, link, label }) => (
    <a
      href={link}
      aria-label={label}
      className="relative inline-flex hover:scale-110 hover:text-primary-900
        transition-all duration-200 drop-shadow-md"
    >
      {icon}
    </a>
  );

  return (
    <div id="layout" className="flex flex-col min-h-screen w-full absolute">
      <header
        className={`${
          isScrolled ? "shadow-md py-1 bg-primary-500/95" : "py-2 sm:py-2"
        }
          sticky top-0 z-50 w-full max-h-20 transition-all duration-300
          bg-primary-500 text-secondary-500 border-b border-secondary-300/30 `}
      >
        <div
          id="header-container"
          className="mx-auto grid max-w-[1400px] grid-cols-[1fr_auto_1fr]
            items-center px-4 lg:px-6"
        >
          {/* NAVIGATION */}
          <div id="nav-container" className="flex items-center justify-start">
            <button
              id="mobile-menu-button"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setSearchOpen(false);
              }}
              className="lg:hidden p-2 -ml-2 hover:text-primary-900
                transition-colors"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaXmark size={22} /> : <FaBars size={20} />}
            </button>

            {/* Desktop Nav */}
            <nav id="desktop-nav" className="hidden lg:flex gap-8">
              {["Home", "Shop", "About"].map((item) => (
                <a
                  key={item}
                  href="/"
                  className="group relative text-sm font-semibold tracking-wide
                    hover:text-primary-900 transition-colors"
                >
                  {item}
                  <span
                    className="absolute -bottom-1 left-0 h-[2px] w-0
                      bg-primary-900 transition-all duration-300
                      group-hover:w-full"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* --- LOGO --- */}
          <div id="logo-container" className="flex">
            <a href="/" className="relative block group">
              <img
                src="/images/nordstil-logo-header-light.webp"
                alt="Nordstil"
                className={`transition-all duration-300 mb-1
                  ${isScrolled ? "h-10 lg:h-12" : "h-12 lg:h-14"}`}
              />
            </a>
          </div>

          {/* --- ACTIONS --- */}
          <div
            id="actions-container"
            className="flex items-center justify-end gap-4"
          >
            <div
              className="hidden lg:flex items-center transition-all duration-300
                w-70"
            >
              {/* --- SEARCH - DESKTOP --- */}
              <div
                id="search-desktop"
                className="relative w-full flex items-center"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 pr-8 py-1 bg-transparent border-b
                    border-secondary-500/50 text-sm text-secondary-100
                    placeholder:text-secondary-500/50 focus:outline-none
                    focus:border-secondary-100 transition-all duration-300
                    ease-out"
                />
                <button
                  className="z-10 hover:scale-110 transition-transform p-1"
                >
                  <FaMagnifyingGlass size={18} />
                </button>
              </div>
            </div>

            {/* --- SEARCH - MOBILE --- */}
            <button
              className="lg:hidden hover:scale-110 transition-transform"
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMenuOpen(false);
              }}
            >
              <FaMagnifyingGlass size={18} />
            </button>

            {/* Icons */}
            <div className="flex items-center gap-4 text-secondary-500">
              <ActionButton
                icon={<FaHeart size={18} />}
                link="/favorites"
                label="Favorites"
              />
              <ActionButton
                icon={<FaBasketShopping size={18} />}
                link="/cart"
                label="Cart"
              />
            </div>
          </div>
        </div>

        {/* --- MOBILE - SEARCH INPUT --- */}
        <div
          id="mobile-search-container"
          className={`lg:hidden absolute left-0 top-full w-full bg-primary-500
            overflow-hidden transition-all duration-250 border-b
            border-secondary-300/20
            ${searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 py-3 flex items-center justify-center">
            <input
              autoFocus={searchOpen}
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md bg-secondary-100/10 rounded-xl px-4
                py-2 text-sm text-secondary-100 focus:outline-none focus:ring-1
                focus:ring-secondary-300"
            />
          </div>
        </div>

        {/* --- MOBILE - NAV --- */}
        <div
          id="mobile-nav-container"
          className={`shadow-xl lg:hidden absolute left-0 top-full w-[60%]
            min-h-screen bg-primary-500 text-secondary-400 transition-all
            duration-250 ease-in-out ${menuOpen ? "block" : "max-h-0 hidden"}`}
        >
          <nav
            className="flex min-h-screen flex-col px-4 pt-6 pb-10 shadow-xl
              gap-2"
          >
            <div id="site-links" className="flex flex-col gap-1">
              {siteLinks.map((item) => (
                <a
                  key={item}
                  href="/"
                  className="w-full py-2.5 px-2 font-medium
                    hover:text-primary-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div id="divider" className="border-t border-secondary-400/40" />

            <div id="promo-links" className="flex flex-col gap-1">
              {promotionLinks.map((item) => (
                <a
                  key={item}
                  href="/"
                  className="w-full py-2.5 px-2 font-medium
                    hover:text-primary-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <div id="user-links" className="mt-14 pt-4 flex flex-col gap-1">
              <div className="flex items-center">
                <FaUser
                  fill="#e1e1d3"
                  size={18}
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                  }}
                />
                <a
                  key={userLinks[0]}
                  href="/"
                  className="py-3 px-2 text-sm font-light text-secondary-400
                    hover:text-primary-900 transition-colors"
                >
                  {userLinks[0]}
                </a>
              </div>
              <div className="flex items-center">
                <FaHeart
                  fill="none"
                  stroke="#e1e1d3"
                  strokeWidth={52}
                  size={20}
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
                  }}
                  viewBox="0 0 512 600"
                />
                <a
                  key={userLinks[1]}
                  href="/"
                  className="py-3 px-2 text-sm font-extralight
                    text-secondary-400 hover:text-primary-900 transition-colors"
                >
                  {userLinks[1]}
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <main
        className="mx-auto grid max-w-[2056px] gap-8 w-full"
        onClick={() => {
          if (!headerOpen) return;
          setSearchOpen(false);
          setMenuOpen(false);
        }}
      >
        {props.children}
      </main>
      <footer
        className="w-full absolute bottom-0 border-t border-secondary-300
          bg-primary-500 py-6 text-[0.8rem]"
      >
        <div
          className="grid gap-2 items-center justify-center mx-auto
            max-w-[1200px] px-4 text-center"
        >
          <p className="text-secondary-500/90">
            Designed with Scandinavian simplicity.
          </p>
          <div className="border-b border-secondary-300/30 w-[50%]"></div>
          <p className="text-xs text-secondary-500/70">
            &copy; 2025 Nordstil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
