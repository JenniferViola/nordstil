// Magazine.tsx
import { Link } from "react-router";
import PageTitle from "@/components/layout/shared/PageTitle";

export default function Magazine() {
  const articles = [
    {
      id: 1,
      title: "The Perfect Winter Coat",
      subtitle: "Investment pieces that stand the test of time",
      image: "images/magazine/article-coats.webp",
      category: "Outerwear",
      readTime: "5 min read",
      href: "/",
    },
    {
      id: 2,
      title: "Scandinavian Winter Essentials",
      subtitle: "Embrace the cold with timeless pieces",
      image: "images/magazine/article-winter.webp",
      category: "Seasonal",
      readTime: "4 min read",
      href: "/",
    },
    {
      id: 3,
      title: "The Art of Minimalism",
      subtitle: "Finding beauty in simplicity",
      image: "images/magazine/article-minimalism.webp",
      category: "Style Guide",
      readTime: "5 min read",
      href: "/",
    },

    {
      id: 4,
      title: "Sustainable Fashion",
      subtitle: "Building a conscious wardrobe",
      image: "images/magazine/article-sustainable.webp",
      category: "Lifestyle",
      readTime: "6 min read",
      href: "/",
    },
  ];

  return (
    <>
      <PageTitle title="Magazine" />

      <div className="flex flex-col gap-6 mb-4">
        {/* Latest Stories Grid */}
        <section>
          <div className="mb-12">
            <h2
              className="text-2xl md:text-3xl font-light tracking-tight
                text-primary-900 mb-2"
            >
              Latest Stories
            </h2>
            <div className="h-px w-16 bg-primary-900" />
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8
              md:gap-12"
          >
            {articles.map((article) => (
              <Link
                key={article.id}
                to={article.href}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] mb-4 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover
                      transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <span
                  className="text-xs tracking-widest uppercase mb-2
                    text-primary-600"
                >
                  {article.category}
                </span>

                <h3
                  className="text-xl md:text-2xl font-light mb-2 tracking-tight
                    text-primary-900 group-hover:opacity-60 transition-opacity"
                >
                  {article.title}
                </h3>

                <p className="text-sm text-body/70 mb-3 font-light">
                  {article.subtitle}
                </p>

                <span className="text-xs text-body/50 mt-auto">
                  {article.readTime}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-10 mb-18">
          <div
            className="bg-secondary-100 md:p-16 flex flex-col items-center
              text-center"
          >
            <h2
              className="text-2xl md:text-3xl font-light tracking-tight
                text-primary-900 mb-4"
            >
              Stay Inspired
            </h2>
            <p className="text-body/70 mb-8 max-w-md font-light">
              Subscribe to our magazine for weekly insights on style,
              sustainability, and Scandinavian living.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-sm border border-primary-900/20
                  focus:outline-none focus:border-primary-900 transition-colors
                  bg-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary-700 text-white text-sm
                  tracking-wide hover:bg-primary-600 transition-colors
                  uppercase"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
