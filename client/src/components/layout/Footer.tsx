// Footer.jsx

export default function Footer() {
  return (
    <footer
      className="w-full border-t border-secondary-300 bg-primary-600 py-6
        text-[0.8rem]"
    >
      <div
        className="grid gap-2 items-center justify-center mx-auto max-w-300
          px-4 text-center"
      >
        <p className="text-secondary-500/90">
          Designed with Scandinavian simplicity.
        </p>
        <div className="divider-l w-full opacity-70"></div>
        <p className="text-xs text-secondary-500/70">
          &copy; 2025 Nordstil. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
