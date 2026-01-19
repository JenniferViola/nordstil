import type { ProductWithCategories } from "@/types/product";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router";

type Props = {
  product: ProductWithCategories;
  className?: string;
};

export default function Breadcrumbs({ product, className }: Props) {
  const categoryTitle = product.categories[0]?.title ?? "";
  return (
    <>
      <nav className={`flex ${className}`} aria-label="Breadcrumb">
        <ol
          className="inline-flex items-center space-x-1 md:space-x-2
            rtl:space-x-reverse"
        >
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-body
                hover:text-fg-brand"
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
          <li>
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
              <Link
                to="/categories/:slug"
                className="inline-flex items-center text-sm font-medium
                  text-body hover:text-fg-brand"
              >
                {categoryTitle}
              </Link>
            </div>
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
                {product.title}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
}
