import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { FaMagnifyingGlass } from "react-icons/fa6";

type SearchProps = {
  searchOpen?: boolean;
  onToggleSearch?: () => void;
};

// Reusable search input
interface SearchInputProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  containerClassName?: string; // optional wrapper styling
}

function SearchInput({
  className,
  placeholder = "Search...",
  autoFocus = false,
  containerClassName,
}: SearchInputProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when autoFocus is true
  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={containerClassName}>
      <form onSubmit={handleSubmit} className={className}>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-b border-body/30 text-base
            placeholder:text-body/40 focus:outline-none"
        />
        <button type="submit" className="hidden lg:block ml-2">
          <FaMagnifyingGlass />
        </button>
      </form>
    </div>
  );
}

// Desktop search wrapper
function SearchDesktop() {
  return (
    <SearchInput
      containerClassName="hidden lg:flex items-center md:w-30 lg:w-60 xl:w-70"
      className="w-full flex items-center pr-8 py-1 bg-transparent text-sm
        placeholder:text-primary-500/50 focus:outline-none
        focus:border-primary-500 transition-all duration-300 ease-out"
      placeholder="Search..."
    />
  );
}

// Mobile search wrapper
function SearchMobile({ searchOpen }: SearchProps) {
  return (
    <div
      className={`lg:hidden absolute left-0 top-full w-full bg-secondary-100
        text-body overflow-hidden transition-all duration-300 ease-out
        shadow-xl/10
        ${searchOpen ? "max-h-28 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <SearchInput
        className="px-6 py-4 w-full rounded-none bg-transparent pb-4 text-base
          placeholder:text-body/40 focus:outline-none"
        placeholder="Search products"
        autoFocus={searchOpen}
      />
    </div>
  );
}

// Mobile toggle button
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
