// admin/Layout.jsx
import { NavLink } from "react-router";
import AdminNavLink from "@/components/ui/admin/AdminNavLink";
import { SlHome, SlBag, SlGrid, SlNote } from "react-icons/sl";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="grid h-screen w-full grid-rows-[auto_1fr_auto] overflow-hidden
        text-slate-900 bg-[#fcfcfc]"
    >
      <header
        className="flex h-14 items-center border-b border-[#4d5d53]/10
          bg-[#f4f6f5] px-6 z-10"
      >
        <NavLink to="/admin" className="hover:opacity-80 transition-opacity">
          <span
            className="text-sm font-semibold tracking-widest uppercase
              text-[#3f674e] text-body"
          >
            Nordstil <span className="font-light text-black">Admin</span>
          </span>
        </NavLink>
      </header>

      <div className="grid grid-cols-[220px_1fr] overflow-hidden p-1 min-h-0">
        <aside className="border-r border-[#4d5d53]/10 p-3">
          <div
            className="mb-4 text-[11px] font-bold uppercase border-l-2 px-2
              border-[#537e64] tracking-wider text-[#3f674e]"
          >
            Navigation
          </div>
          <nav className="flex flex-col gap-1 ml-4">
            <AdminNavLink to="/admin" end>
              <SlHome className="inline mr-2" />
              Dashboard
            </AdminNavLink>
            <AdminNavLink to="/admin/products">
              <SlBag className="inline mr-2" />
              Products
            </AdminNavLink>
            <AdminNavLink to="/admin/categories">
              <SlGrid className="inline mr-2" />
              Categories
            </AdminNavLink>
            <AdminNavLink to="/admin/orders">
              <SlNote className="inline mr-2" />
              Orders
            </AdminNavLink>
          </nav>
        </aside>

        <main className="overflow-y-auto px-6 py-4">
          <div id="page-container" className="max-w-5xl">
            {children}
          </div>
        </main>
      </div>

      <footer className="border-t border-[#4d5d53]/10 bg-[#f4f6f5] py-3 px-6">
        <p
          className="text-[10px] uppercase tracking-widest text-[#3f674e]
            text-center"
        >
          System Version 1.0.2 &bull; &copy; 2026 Nordstil
        </p>
      </footer>
    </div>
  );
}
