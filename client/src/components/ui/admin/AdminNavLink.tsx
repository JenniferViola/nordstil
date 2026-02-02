import { NavLink } from "react-router";

export default function AdminNavLink({
  to,
  children,
  end = false,
}: {
  to: string;
  children: React.ReactNode;
  end?: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 text-[0.85rem] transition-all ${
          isActive
            ? `font-extrabold text-[#314e3c] text-[0.91rem] border-l-2
              border-[#537e64] -ml-[17px] pl-[15px] `
            : "text-[#344b3c] font-semibold hover:text-black tracking-wide "
        }`
      }
    >
      {children}
    </NavLink>
  );
}
