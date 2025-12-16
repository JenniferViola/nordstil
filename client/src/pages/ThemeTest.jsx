import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";

function ThemeTest() {
  return (
    <section>
      <header
        className="relative w-full border-b border-secondary-300/60
          bg-primary-500 text-secondary-500"
      >
        {/* --- LOGO --- */}
        <div
          id="img-container"
          className={`${searchOpen ? "hidden" : ""} absolute left-1/2
            -translate-x-1/2 flex justify-center items-center mb-2`}
        >
          <img
            id="logo-image"
            src="images/nordstil-logo-header-light.webp"
            alt="Nordstil Logo"
            className={`${searchOpen ? "hidden" : ""} h-auto w-30 sm:w-34
              lg:w-38 pointer-events-none sm:pointer-events-auto`}
          />
        </div>

        {/* --- INNER CONTAINER --- */}
        <div
          id="header-inner"
          className={`${searchOpen ? "grid min-h-12" : "grid grid-cols-[auto_1fr_auto] min-h-18 px-4"}
            mx-auto w-full max-w-[1400px] justify-center items-center`}
        >
          {/* --- NAVIGATION --- */}
          <div
            id="navigation"
            className={`${searchOpen ? "hidden" : ""} flex justify-start`}
          >
            {/* --- Desktop --- */}
            <nav className="hidden gap-3 text-sm lg:flex lg:gap-6 lg:text-base">
              <a
                href="/"
                className="text-xs font-semibold hover:text-primary-900"
              >
                Home
              </a>
              <a
                href="/"
                className="text-xs font-semibold hover:text-primary-900"
              >
                Shop
              </a>
              <a
                href="/"
                className="text-xs font-semibold hover:text-primary-900"
              >
                About
              </a>
            </nav>

            {/* -- Mobile -- */}
            <div
              id="mobile-menu-container"
              className={`${searchOpen ? "hidden" : ""} lg:hidden flex flex-col
                items-center w-full`}
            >
              <button
                id="hamburger-button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <FaBars size={20} className="text-secondary-500" />
              </button>
            </div>
          </div>

          {/* --- ACTIONS --- */}
          <div
            id="header-actions"
            className="flex justify-end items-center gap-8"
          >
            {/* --- SEARCH DESKTOP --- */}
            <div
              id="search-container"
              className="flex items-center gap-2 lg:pb-1 transition lg:border-b
                lg:border-secondary-300/50 active:scale-103"
            >
              <button
                id="searchBtnMobile"
                className={`${searchOpen ? "hidden" : ""} lg:hidden`}
                onClick={() => setSearchOpen(true)}
              >
                <FaMagnifyingGlass fill="#efefe6" size={16} />
              </button>
              <button id="searchBtnDesktop" className="hidden lg:block">
                <FaMagnifyingGlass fill="#efefe6" size={16} />
              </button>

              <input
                id="search"
                type="text"
                placeholder="Search..."
                className="hidden lg:block text-secondary-100 transition
                  focus:outline-none"
              />
            </div>

            {/* --- USER --- */}
            <div id="basket-user-favorites" className="flex gap-4">
              <FaUser
                fill="#efefe6"
                size={16}
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                }}
                className={`${searchOpen ? "hidden" : ""} transition
                  hover:scale-110`}
              />
              <FaHeart
                fill="#efefe6"
                size={16}
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                }}
                className={`${searchOpen ? "hidden" : ""} transition
                  hover:scale-110`}
              />
              <FaBasketShopping
                fill="#efefe6"
                size={16}
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                }}
                className={`${searchOpen ? "hidden" : ""} transition
                  hover:scale-110`}
              />
            </div>
          </div>
        </div>

        {/* --- MOBILE SEARCH --- */}
        {searchOpen && (
          <div
            id="search-open"
            className="lg:hidden absolute left-0 right-0 bottom-0 mx-auto w-full
              max-w-[1400px] px-4 py-3"
          >
            <div className="flex items-center gap-2">
              <button id="searchBtnMobile" className="lg:hidden">
                <FaMagnifyingGlass fill="#efefe6" size={16} />
              </button>
              <input
                type="text"
                placeholder="Search..."
                className="w-full border-b border-secondary-300/50
                  bg-transparent text-secondary-100 focus:border-secondary-100
                  focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* --- MOBILE NAV --- */}
        {menuOpen && !searchOpen && (
          <div
            id="mobile-nav-container"
            className="lg:hidden border-t border-secondary-300/30"
          >
            <nav
              className="w-full grid gap-3 p-4 bg-primary-500 text-base
                shadow-md"
            >
              <a
                href="/"
                className="border-b border-secondary-300/30 font-semibold
                  hover:text-primary-900"
              >
                Home
              </a>
              <a
                href="/"
                className="border-b border-secondary-300/30 font-semibold
                  hover:text-primary-900"
              >
                Shop
              </a>
              <a
                href="/"
                className="border-b border-secondary-300/30 font-semibold
                  hover:text-primary-900"
              >
                About
              </a>
            </nav>
          </div>
        )}
      </header>

      <Hero />
      <ProductGrid />
      <h1>h1 Heading</h1>
      <h2>h2 Heading</h2>
      <h3>h3 Heading</h3>

      <p>This is a paragraph to test the theme styles.</p>
      <button className="btn-primary mt-4">Button</button>
    </section>
  );
}

export default ThemeTest;
