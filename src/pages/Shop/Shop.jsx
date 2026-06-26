import { ShoppingCart, ChevronDown, Star } from "lucide-react";
// import { IoAirplane } from "react-icons/io5";
import {
  ShirtModel,
  ShoesModel,
  BeltModel,
  CapModel,
  BadgeModel,
  namePlate,
  RankModel,
  bgHero,
} from "@/assets/images";
import Footer from "@/components/Footer/Footer";

const categories = [
  "All Products",
  "IAF Uniforms",
  "Custom Stitching",
  "Caps",
  "Belts",
  "Badges",
  "Name Plates",
  "Rank Accessories",
  "Shoes",
];

const products = [
  {
    title: "IAF Working Shirt",
    category: "IAF Uniforms",
    price: 1450,
    image: ShirtModel,
    tag: "Custom Fit",
  },
  {
    title: "Peak Cap",
    category: "Caps",
    price: 950,
    image: CapModel,
    tag: "Ready Stock",
  },
  {
    title: "Canvas Belt",
    category: "Belts",
    price: 450,
    image: BeltModel,
    tag: "Ready Stock",
  },
  {
    title: "Pilot Wing Badge",
    category: "Badges",
    price: 350,
    image: BadgeModel,
    tag: "Ready Stock",
  },
  {
    title: "Name Plate",
    category: "Name Plates",
    price: 250,
    image: namePlate,
    tag: "Ready Stock",
  },
  {
    title: "Shoulder Epaulette",
    category: "Rank Accessories",
    price: 280,
    image: RankModel,
    tag: "Made to Order",
  },
  {
    title: "Formal Shoes",
    category: "Shoes",
    price: 2250,
    image: ShoesModel,
    tag: "Ready Stock",
  },
  {
    title: "IAF Working Shirt",
    category: "IAF Uniforms",
    price: 1450,
    image: ShirtModel,
    tag: "Custom Fit",
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white text-[#061735]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#061735]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${bgHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061735] via-[#061735]/90 to-[#061735]/40" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 text-white md:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Shop <span className="text-[#d4a52f]">Uniforms & Accessories</span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-200">
              Premium IAF uniforms, custom stitching, caps, belts, badges,
              name plates and essential accessories — delivered across India.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-md bg-[#b89b3c] px-7 py-3 text-sm font-semibold text-white">
                Shop Uniforms →
              </button>
              <button className="rounded-md border border-white px-7 py-3 text-sm font-semibold">
                Shop Accessories →
              </button>
            </div>
          </div>

          <div className="hidden justify-center md:flex">
            <img src={ShirtModel} alt="IAF Uniform" className="h-[360px] object-contain" />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-4 text-sm font-semibold lg:px-8">
          {categories.map((item, index) => (
            <button
              key={item}
              className={`shrink-0 pb-2 ${
                index === 0
                  ? "border-b-2 border-[#b89b3c] text-[#b89b3c]"
                  : "text-[#061735]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[260px_1fr] lg:px-8">
        {/* Sidebar */}
        <aside className="hidden rounded-xl border bg-white p-5 shadow-sm lg:block">
          <h3 className="font-bold">Categories</h3>

          <div className="mt-5 space-y-3 text-sm">
            {categories.slice(1).map((item) => (
              <label key={item} className="flex items-center gap-3">
                <input type="checkbox" className="h-4 w-4" />
                {item}
              </label>
            ))}
          </div>

          <div className="my-6 border-t" />

          <h3 className="font-bold">Price Range</h3>
          <p className="mt-3 text-sm">₹0 - ₹5,000+</p>
          <input type="range" className="mt-4 w-full accent-[#b89b3c]" />

          <div className="my-6 border-t" />

          <h3 className="font-bold">Availability</h3>
          <div className="mt-4 space-y-3 text-sm">
            <label className="flex items-center gap-3">
              <input type="checkbox" /> In Stock
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" /> Made to Order
            </label>
          </div>

          <button className="mt-6 w-full rounded-md border py-2 text-sm font-semibold">
            Clear Filters
          </button>
        </aside>

        {/* Products */}
        <section>
          <div className="mb-6 flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold">Showing 1–24 of 80 products</p>

            <button className="flex w-fit items-center gap-2 rounded-md border px-4 py-2 text-sm">
              Sort by: Popular <ChevronDown size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {products.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl"
              >
                <span className="rounded bg-[#b89b3c] px-2 py-1 text-[10px] font-bold text-white">
                  {item.tag}
                </span>

                <div className="mt-4 flex h-40 items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full object-contain"
                  />
                </div>

                <p className="mt-4 text-[11px] uppercase text-gray-500">
                  {item.category}
                </p>

                <h3 className="mt-1 text-sm font-bold">{item.title}</h3>

                <p className="mt-2 text-lg font-bold">₹{item.price}</p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex text-[#d4a52f]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <button className="rounded-md border p-2 transition hover:bg-[#061735] hover:text-white">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-8 overflow-hidden rounded-xl bg-[#061735] text-white">
            <div className="grid items-center gap-6 px-6 py-8 md:grid-cols-[1fr_2fr_1fr]">
              <div className="hidden md:block">
                <img src={ShirtModel} alt="" className="h-28 object-contain opacity-80" />
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold">
                  Need a Custom Fit Uniform?
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Create your measurement profile once and use it for every future order.
                </p>
              </div>

              <button className="rounded-md bg-[#b89b3c] px-5 py-3 text-sm font-bold">
                Create Measurement Profile →
              </button>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-3">
            {[1, 2, 3, 4].map((item) => (
              <button
                key={item}
                className={`h-9 w-9 rounded-md border text-sm ${
                  item === 1 ? "bg-[#b89b3c] text-white" : "bg-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}