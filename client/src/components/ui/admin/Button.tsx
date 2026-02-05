import type { ReactNode } from "react";
import { Link } from "react-router";

// 1. Extract shared styles to a constant
const buttonBaseStyles = `
  inline-flex items-center justify-center px-3.5 py-2.5 
  bg-[#546159] rounded-sm text-white text-[11px] 
  font-semibold uppercase tracking-[0.15em] border 
  border-transparent hover:bg-[#3f4a45] hover:shadow-lg 
  transition-all duration-300 ease-tight active:scale-[0.97]
  disabled:opacity-50 disabled:cursor-not-allowed
`;

interface AdminButtonProps {
  children: ReactNode;
  icon?: ReactNode; // Optional icon prop
  disabled?: boolean;
}

interface LinkButtonProps extends AdminButtonProps {
  to: string; // Required for the Link version
}

// Navigational Button (Link)
export function Button({ children, to, icon }: LinkButtonProps) {
  return (
    <Link to={to} className={buttonBaseStyles}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
}

// Form Submission Button
export function SubmitButton({ children, icon, disabled }: AdminButtonProps) {
  return (
    <button type="submit" disabled={disabled} className={buttonBaseStyles}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
