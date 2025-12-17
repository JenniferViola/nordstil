import type { Product } from "../types/product";

type Props = {
  product: Product;
};

export default function Breadcrumbs({ product }: Props) {
  return (
    <>
      <nav className="flex mb-2.5" aria-label="Breadcrumb">
        <ol
          className="inline-flex items-center space-x-1 md:space-x-2
            rtl:space-x-reverse"
        >
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-body
                hover:text-fg-brand"
            >
              <svg
                className="w-4 h-4 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                />
              </svg>
              Nordstil
            </a>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
              <a
                href="/categories/:slug"
                className="inline-flex items-center text-sm font-medium text-body
                  hover:text-fg-brand"
              >
                Category
              </a>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
