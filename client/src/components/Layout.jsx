// /components/Layout.jsx
import { useState } from "react";
import { FaBars, FaHeart, FaMagnifyingGlass } from "react-icons/fa6";

export default function Layout(props) {
  const [menuOpen, setMenuOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div id="layout" className="min-h-screen grid w-full">
      <header className="bg-primary-500 text-secondary-500 w-full h-24 sm:h-34 border-b border-secondary-300 flex justify-center">
        <div
          id="header-inner"
          className="mx-auto flex-row-reverse flex w-full max-w-[1440px] items-center justify-between"
        >
          <div id="header-actions" className="flex items-center gap-4">
            <div
              id="search"
              className="rounded-sm flex items-center gap-2 active:scale-105 transition"
            >
              {/* -- FIX OPENED SEARCH INPUT OVERFLOWING -- */}
              <button
                id="searchBtnMobile"
                className="sm:hidden"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <FaMagnifyingGlass fill="#efefe6" size={20} />
              </button>
              <button id="searchBtnDesktop" className="hidden sm:block">
                <FaMagnifyingGlass fill="#efefe6" size={18} />
              </button>

              <input
                id="search"
                type="text"
                placeholder="Search..."
                className={`${searchOpen ? "w-90" : "hidden"} sm:block text-secondary-100 border-b border-secondary-300/50 focus:outline-none focus:border-secondary-100 transition`}
              />
            </div>
            <FaHeart
              fill="#efefe6"
              size={28}
              viewBox="0 0 512 600"
              style={{
                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
              }}
              className={`${searchOpen ? "hidden" : ""} transition hover:scale-110`}
            />
          </div>

          <img
            id="logo-image"
            src="images/nordstil-logo-light.webp"
            alt="Nordstil Logo"
            className={`${searchOpen ? "hidden" : ""} w-40 h-auto sm:w-50 lg:w-52`}
          />

          <div id="navigation">
            <nav className="hidden sm:flex gap-3 text-sm sm:gap-6 sm:text-base">
              <a
                href="/"
                className="hover:text-primary-900 text-xs font-semibold"
              >
                Home
              </a>
              <a
                href="/"
                className="hover:text-primary-900 text-xs font-semibold"
              >
                Shop
              </a>
              <a
                href="/"
                className="hover:text-primary-900 text-xs font-semibold"
              >
                About
              </a>
            </nav>

            {/* -- Mobile -- */}
            <button
              className={`${searchOpen ? "hidden" : ""} sm:hidden`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars size={28} className="text-secondary-500" />
            </button>
            {menuOpen && (
              <nav className="absolute right-0 z-10 w-full bg-primary-500 sm:hidden shadow-md py-6 px-4 flex flex-col gap-3 text-base">
                <a
                  href="/"
                  className="hover:text-primary-900 font-semibold border-b border-secondary-300/30"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="hover:text-primary-900 font-semibold border-b border-secondary-300/30"
                >
                  Shop
                </a>
                <a
                  href="/"
                  className="hover:text-primary-900 font-semibold border-b border-secondary-300/30"
                >
                  About
                </a>
              </nav>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto md:w-full max-w-[2056px] grid gap-8">
        {props.children}
      </main>

      <footer className="bg-primary-500 py-6 text-secondary-500 text-[0.8rem] border-t border-secondary-300 w-full">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
          <p>&copy; 2025 Nordstil. All rights reserved.</p>
          <p className="mt-2">Designed with Scandinavian simplicity.</p>
        </div>
      </footer>
    </div>
  );
}
