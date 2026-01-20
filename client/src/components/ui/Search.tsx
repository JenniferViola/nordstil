import { Link } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";

type SearchProps = {
  searchOpen?: boolean;
  onToggleSearch?: () => void;
};

function SearchDesktop() {
  return (
    <div className="hidden lg:flex items-center md:w-30 lg:w-60 xl:w-70">
      <div className="w-full flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 pr-8 py-1 bg-transparent border-b
            border-primary-500/50 text-sm placeholder:text-primary-500/50
            focus:outline-none focus:border-primary-500 transition-all
            duration-300 ease-out"
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
  );
}

function SearchMobile({ searchOpen }: SearchProps) {
  return (
    <div
      className={`lg:hidden absolute left-0 top-full w-full bg-secondary-100
        text-body overflow-hidden transition-all duration-300 ease-out
        shadow-xl/10
        ${searchOpen ? "max-h-28 opacity-100" : "max-h-0 opacity-0"} `}
    >
      <div className="px-6 py-4">
        <input
          autoFocus={searchOpen}
          type="text"
          placeholder="Search products"
          className="w-full rounded-none bg-transparent border-b border-body/30
            pb-2 text-base placeholder:text-body/40 focus:outline-none"
        />
      </div>
    </div>
  );
}

function SearchToggle({ onToggleSearch }: SearchProps) {
  return (
    <div
      className="lg:hidden hover:scale-110 transition-transform"
      onClick={onToggleSearch}
      aria-label="Toggle Search"
    >
      <FaMagnifyingGlass size={18} />
    </div>
  );
}

export { SearchDesktop, SearchMobile, SearchToggle };
