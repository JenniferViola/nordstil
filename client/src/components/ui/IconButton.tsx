import type React from "react";
import { Link } from "react-router";

type IconButtonProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export default function IconButton({ icon, href, label }: IconButtonProps) {
  return (
    <Link
      to={href}
      aria-label={label}
      className="relative inline-flex items-center justify-center p-2
        hover:scale-110 hover:text-primary-900 transition-all duration-200
        drop-shadow-sm"
    >
      {icon}
    </Link>
  );
}
