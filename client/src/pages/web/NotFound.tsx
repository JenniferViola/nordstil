import PageTitle from "@/components/layout/shared/PageTitle";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <PageTitle title={`Page not found – Nordstil`} />

      <div className="flex flex-col items-center min-h-screen gap-10 mt-24 mx-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-center text-2xl sm:text-3xl font-bold">
            404 - Page Not Found
          </h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
        <Link to={"/"}>
          <button
            className="px-4 py-2 bg-primary text-white rounded
              hover:bg-primary-700 cursor-pointer"
          >
            Go to Home
          </button>
        </Link>
      </div>
    </>
  );
}
