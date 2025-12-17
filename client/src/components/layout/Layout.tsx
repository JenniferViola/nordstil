// components/layout/Layout.jsx
import type { ReactNode } from "react";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";

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
    <div className="min-h-screen w-full flex flex-col">
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
        className="flex-1 mx-auto grid max-w-514 gap-8 w-full"
        onClick={() => {
          if (!headerOpen) return;
          closeHeader();
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
