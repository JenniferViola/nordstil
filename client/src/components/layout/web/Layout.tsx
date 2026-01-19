// components/layout/Layout.jsx
import type { ReactNode } from "react";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const headerOpen = menuOpen || searchOpen;

  const closeHeader = () => {
    setMenuOpen(false);
    setSearchOpen(false);
  };

  return (
    <div className="h-full w-full flex flex-col">
      <Header
        menuOpen={menuOpen}
        searchOpen={searchOpen}
        onToggleMenu={() => {
          setMenuOpen((v) => !v);
          setSearchOpen(false);
        }}
        onToggleSearch={() => {
          setSearchOpen((v) => !v);
          setMenuOpen(false);
        }}
        onClose={closeHeader}
      />

      <main
        className={"w-full m-2 grid gap-4 justify-center items-center relative"}
        onClick={() => {
          if (!headerOpen) return;
          closeHeader();
        }}
      >
        {searchOpen && <div className="absolute inset-0 bg-black/40 z-10" />}

        {children}
      </main>

      <Footer />
    </div>
  );
}
