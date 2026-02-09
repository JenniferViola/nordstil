import PageTitle from "@/components/layout/shared/PageTitle";
import useAllProducts from "@/hooks/useAllProducts";
import useFeaturedProducts from "@/hooks/useFeaturedProducts";
import usePublishedProducts from "@/hooks/usePublishedProducts";
import useHero from "@/hooks/useHero";
import useSpots from "@/hooks/useSpots";
import useAllOrders from "@/hooks/useAllOrders";
import useCategories from "@/hooks/useCategories";
import {
  SlGrid,
  SlStar,
  SlEye,
  SlBag,
  SlPicture,
  SlScreenDesktop,
  SlLayers,
} from "react-icons/sl";

export default function Index() {
  const allProducts = useAllProducts();
  const featuredProducts = useFeaturedProducts();
  const publishedProducts = usePublishedProducts();
  const hero = useHero();
  const spots = useSpots();
  const orders = useAllOrders();
  const categories = useCategories();

  const stats = [
    {
      label: "Total Products",
      value: allProducts?.length ?? 0,
      icon: SlGrid,
      change: "+12%",
      trend: "up",
    },
    {
      label: "Published",
      value: publishedProducts?.length ?? 0,
      icon: SlEye,
      change: "+5%",
      trend: "up",
    },
    {
      label: "Total Orders",
      value: orders?.length ?? 0,
      icon: SlBag,
      change: "+23%",
      trend: "up",
    },
    {
      label: "Categories",
      value: categories?.length ?? 0,
      icon: SlLayers,
      change: "0%",
      trend: "neutral",
    },
  ];

  const publishedPercent = allProducts?.length
    ? ((publishedProducts?.length ?? 0) / allProducts.length) * 100
    : 0;
  const featuredPercent = publishedProducts?.length
    ? ((featuredProducts?.length ?? 0) / publishedProducts.length) * 100
    : 0;
  const unpublishedCount =
    (allProducts?.length ?? 0) - (publishedProducts?.length ?? 0);

  return (
    <>
      <PageTitle title="Nordstil - Dashboard" />
      <section id="index-container" className="min-h-screen">
        <div className="max-w-7xl flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">
                Dashboard
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Welcome back, here's what's happening today
              </p>
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-slate-200 rounded-lg p-5
                  hover:border-[#3f674e]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-[#3f674e]/5 p-2.5 rounded-lg">
                    <stat.icon className="text-[#3f674e] text-lg" />
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      stat.trend === "up"
                        ? "bg-emerald-50 text-emerald-700"
                        : stat.trend === "down"
                          ? "bg-red-50 text-red-700"
                          : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              className="lg:col-span-2 bg-white border border-slate-200
                rounded-lg p-6"
            >
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Product Status Overview
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      Published Products
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {publishedProducts?.length ?? 0} /{" "}
                      {allProducts?.length ?? 0}
                    </span>
                  </div>
                  <div
                    className="w-full bg-slate-100 rounded-full h-3
                      overflow-hidden"
                  >
                    <div
                      className="bg-[#3f674e] h-3 rounded-full transition-all
                        duration-500"
                      style={{ width: `${publishedPercent}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {publishedPercent.toFixed(1)}% of products are published
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-700">
                      Featured Products
                    </span>
                    <span className="text-sm font-semibold text-slate-700">
                      {featuredProducts?.length ?? 0} /{" "}
                      {publishedProducts?.length ?? 0}
                    </span>
                  </div>
                  <div
                    className="w-full bg-slate-100 rounded-full h-3
                      overflow-hidden"
                  >
                    <div
                      className="bg-[#d7d7a3] h-3 rounded-full transition-all
                        duration-500"
                      style={{ width: `${featuredPercent}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {featuredPercent.toFixed(1)}% of published products are
                    featured
                  </p>
                </div>

                <div
                  className="grid grid-cols-3 gap-4 pt-4 border-t
                    border-slate-200"
                >
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#3f674e]">
                      {publishedProducts?.length ?? 0}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Published</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#afaf65]">
                      {featuredProducts?.length ?? 0}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Featured</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-400">
                      {unpublishedCount}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">Unpublished</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Content Status
              </h2>

              <div className="space-y-4">
                <div
                  className="flex items-center justify-between p-4 bg-slate-50
                    rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-white p-2 rounded-lg border
                        border-slate-200"
                    >
                      <SlScreenDesktop className="text-[#3f674e]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Active Hero
                      </p>
                      <p className="text-xs text-slate-500">Homepage banner</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${hero ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}
                  >
                    {hero ? "Active" : "Inactive"}
                  </span>
                </div>

                <div
                  className="flex items-center justify-between p-4 bg-slate-50
                    rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-white p-2 rounded-lg border
                        border-slate-200"
                    >
                      <SlPicture className="text-[#3f674e]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Active Spots
                      </p>
                      <p className="text-xs text-slate-500">
                        Featured sections
                      </p>
                    </div>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium
                      bg-[#3f674e]/10 text-[#3f674e]"
                  >
                    {spots?.length ?? 0} / 3
                  </span>
                </div>

                <div
                  className="flex items-center justify-between p-4 bg-slate-50
                    rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="bg-white p-2 rounded-lg border
                        border-slate-200"
                    >
                      <SlStar className="text-[#b8ad38]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">
                        Featured Rate
                      </p>
                      <p className="text-xs text-slate-500">
                        Of published items
                      </p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    {featuredPercent.toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-[#6d8978] to-[#475a4f] text-white
              rounded-lg p-6"
          >
            <h2 className="text-lg font-semibold mb-4 text-white">
              Quick Insights
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-xs opacity-80 uppercase tracking-wide mb-1">
                  Total Categories
                </p>
                <p className="text-2xl font-bold">{categories?.length ?? 0}</p>
              </div>
              <div>
                <p className="text-xs opacity-80 uppercase tracking-wide mb-1">
                  Avg Products/Category
                </p>
                <p className="text-2xl font-bold">
                  {categories?.length
                    ? Math.round((allProducts?.length ?? 0) / categories.length)
                    : 0}
                </p>
              </div>
              <div>
                <p className="text-xs opacity-80 uppercase tracking-wide mb-1">
                  Total Orders
                </p>
                <p className="text-2xl font-bold">{orders?.length ?? 0}</p>
              </div>
              <div>
                <p className="text-xs opacity-80 uppercase tracking-wide mb-1">
                  Conversion Rate
                </p>
                <p className="text-2xl font-bold">2.4%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
