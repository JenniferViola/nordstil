// Search.tsx

// TO DO: Fix layout when no results are found

import { useSearchParams } from "react-router";
import { Link } from "react-router";
import useSearchProducts from "@/hooks/useSearchProducts";
import ProductGrid from "@/components/ui/products/ProductGrid";
import { FaArrowRight, FaHouse } from "react-icons/fa6";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const pageTitle = "Search results";

  const products = useSearchProducts(query);

  return (
    <section id="search-results" className="grid gap-4 sm:gap-8 mt-4">
      <div id="breadcrumbs">
        <nav className={"flex"} aria-label="Breadcrumb">
          <ol
            className="inline-flex items-center space-x-1 md:space-x-2
              rtl:space-x-reverse"
          >
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium
                  text-body hover:text-fg-brand"
              >
                <FaHouse
                  fill="none"
                  size={12}
                  stroke="#3e4a42"
                  strokeWidth={72}
                  className="me-2"
                />
                Nordstil
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center space-x-1.5">
                <svg
                  className="w-3.5 h-3.5 rtl:rotate-180 text-body"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
                <span
                  className="inline-flex items-center text-sm font-medium
                    text-body-subtle"
                >
                  {pageTitle}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      <div id="results-header" className="flex flex-col">
        <h1 className="text-2xl sm:text-xl font-semibold leading-tight">
          {`Found ${products.length} results: ${query}`}
        </h1>
        <div id="filter" className="flex gap-2 mt-2 items-center">
          <div className="flex gap-1 items-center">
            <h2 className="text-base font-medium">Filter</h2>
            <FaArrowRight size={12} className="text-primary" />
          </div>
          <p className="text-xs text-black/60">4 available</p>
        </div>
      </div>

      <ProductGrid products={products} className="items-center" />
    </section>
  );
}
