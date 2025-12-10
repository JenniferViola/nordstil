// /components/Layout.jsx

// TO DO: FIX LAYOUT, MAIN NOT CENTERED
export default function Layout(props) {
  return (
    <div
      id="layout"
      className="min-h-screen grid gap-4 grid-rows-[auto,1fr,auto] w-full"
    >
      {/* HEADER – full width */}
      <header className="bg-primary-900 py-6 text-secondary-900 shadow-md w-full">
        <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          <h1 className="text-secondary-900 font-extralight">NORDSTIL</h1>
          <nav className="space-x-4 md:space-x-6 lg:space-x-8">
            <a href="/" className="hover:text-primary-900 font-semibold">
              Home
            </a>
            <a href="/" className="hover:text-primary-900 font-semibold">
              Shop
            </a>
            <a href="/" className="hover:text-primary-900 font-semibold">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* MAIN – full-width section, centered inner content */}
      <main className="w-full">
        <div className="max-w-[1200px] mx-4 grid gap-8">{props.children}</div>
      </main>

      {/* FOOTER – full width */}
      <footer className="bg-primary-900 py-6 text-secondary-900 text-[0.8rem] p-4 text-center border-t border-neutral-300 w-full">
        <p>&copy; 2025 Nordstil. All rights reserved.</p>
        <p className="mt-2">Designed with Scandinavian simplicity.</p>
      </footer>
    </div>
  );
}
