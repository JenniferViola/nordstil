// Footer.jsx
import { Divider } from "@/components/ui/Divider";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-700 py-6 text-[0.8rem]">
      <div
        className="grid gap-2 items-center justify-center mx-auto max-w-300 px-4
          text-center"
      >
        <p className="text-secondary-200/70">
          Designed with Scandinavian simplicity.
        </p>
        <Divider variant="light" />
        <p className="text-xs text-secondary-200/50">
          &copy; 2025 Nordstil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
