// Button.tsx
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="text-white bg-primary-500 box-border border border-transparent
        hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs
        font-medium leading-5 rounded-full text-sm px-4 py-2.5
        focus:outline-none"
    >
      {children}
    </button>
  );
}
