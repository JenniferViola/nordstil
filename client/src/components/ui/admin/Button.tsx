import type { ReactNode } from "react";
import { Link } from "react-router";

// 1. Extract shared styles to a constant
const buttonBaseStyles = `
  inline-flex items-center justify-center px-3.5 py-2.5 h-[2.5rem] truncate 
  bg-[#546159] rounded-sm text-white text-[11px] 
  font-semibold uppercase tracking-[0.15em] border 
  border-transparent hover:bg-[#3f4a45] hover:shadow-lg 
  transition-all duration-300 ease-tight active:scale-[0.97]
  disabled:opacity-50 disabled:cursor-not-allowed
`;

interface AdminButtonProps {
  children: ReactNode;

  disabled?: boolean;
}

interface LinkButtonProps extends AdminButtonProps {
  to: string;
}

// Nav Button
export function Button({ children, to }: LinkButtonProps) {
  return (
    <Link to={to} className={buttonBaseStyles}>
      {children}
    </Link>
  );
}

// Submit Button
export function SubmitButton({ children, disabled }: AdminButtonProps) {
  return (
    <button type="submit" disabled={disabled} className={buttonBaseStyles}>
      {children}
    </button>
  );
}
