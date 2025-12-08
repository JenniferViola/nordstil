// /components/Layout.jsx

export default function Layout(props) {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <header className="bg-primary-900 py-2 text-secondary-900 shadow-md ">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-secondary-500 font-extralight">NORDSTIL</h1>
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
      <main className="grow container mx-auto p-4">{props.children}</main>
      <footer className="bg-primary-900 py-6 text-primary-l text-[0.8rem] p-4 text-center border-t border-neutral-300 ">
        <p>&copy; 2025 Nordstil. All rights reserved.</p>

        <p className="mt-2">Designed with Scandinavian simplicity.</p>
      </footer>
    </div>
  );
}
