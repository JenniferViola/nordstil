import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { SlMagnifier } from "react-icons/sl";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  inputClassName?: string;
  onSubmit?: () => void;
}

function SearchInput({
  className,
  placeholder = "Search...",
  autoFocus = false,
  inputClassName,
  onSubmit,
}: SearchInputProps) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
      onSubmit?.();
    } else {
      navigate(`/search`);
      onSubmit?.();
    }
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-transparent text-base placeholder:text-body/40
          focus:outline-none ${inputClassName ? `${inputClassName}` : ""}`}
      />
      <button type="submit" className="hidden lg:block ml-2">
        <SlMagnifier />
      </button>
    </form>
  );
}

// Desktop search
function SearchDesktop() {
  return (
    <SearchInput
      className="hidden lg:flex items-center"
      placeholder="Search..."
      inputClassName="lg:w-50 xl:w-60 xl:w-70 flex-1 pr-8
        py-1 bg-transparent border-b border-primary-500/50 text-sm
        placeholder:text-primary-500/50 focus:outline-none
        focus:border-primary-500 transition-all duration-300 ease-out"
    />
  );
}

// Mobile search wrapper
interface SearchMobileProps {
  searchOpen: boolean;
  onClose: () => void;
}
function SearchMobile({ searchOpen, onClose }: SearchMobileProps) {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <div
      className={`lg:hidden absolute left-0 top-full w-full bg-secondary-100
        text-body overflow-hidden transition-all duration-200 ease-out
        shadow-xl/10 pb-2
        ${searchOpen ? "max-h-28 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <SearchInput
        className="px-6 py-4 pb-2 w-full rounded-none bg-transparent text-base
          placeholder:text-body/40 focus:outline-none"
        inputClassName="border-b pb-2"
        autoFocus={searchOpen}
        onSubmit={onClose}
      />
    </div>
  );
}

// Mobile toggle button
interface SearchToggleProps {
  searchOpen?: boolean;
  onToggle: () => void;
}

function SearchToggle({ onToggle }: SearchToggleProps) {
  return (
    <div
      className="lg:hidden hover:scale-110 transition-transform z-50"
      onClick={onToggle}
      aria-label="Toggle Search"
    >
      <SlMagnifier size={18} />
    </div>
  );
}

export { SearchDesktop, SearchMobile, SearchToggle };
