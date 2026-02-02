import type React from "react";

type IconButtonProps = {
  label: string;
  icon: React.ReactNode;
};

export default function IconButton({ icon, label }: IconButtonProps) {
  return (
    <div
      aria-label={label}
      className="relative inline-flex items-center justify-center p-2
        hover:scale-110 hover:text-primary-900 transition-all duration-200
        drop-shadow-sm"
    >
      {icon}
    </div>
  );
}
