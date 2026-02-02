import type { ReactNode } from "react";
import { Link } from "react-router";

interface AdminButtonProps {
  children: ReactNode;
  to: string;
}

export default function Button({ children, to }: AdminButtonProps) {
  return (
    <Link
      to={to}
      className="flex items-center px-3.5 py-2.5 bg-[#546159] rounded-sm
        text-white text-[11px] font-semibold uppercase tracking-[0.15em] border
        border-transparent hover:bg-[#3f4a45] hover:shadow-lg transition-all
        duration-300 ease-tight active:scale-[0.97]"
    >
      {children}
    </Link>
  );
}
