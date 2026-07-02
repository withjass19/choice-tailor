import { useEffect, useMemo, useState } from "react";
import { ShoppingCart, ChevronDown, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ShirtModel, bgHero } from "@/assets/images";
import Footer from "@/components/Footer/Footer";
import { supabase } from "@/lib/supabase";

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

export default function ShopPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [maxPrice, setMaxPrice] = useState(5000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [madeToOrderOnly, setMadeToOrderOnly] = useState(false);
  const [sortBy, setSortBy] = useState("popular");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("status", "Active")
          .order("created_at", { ascending: false });

        if (error) throw error;

        setProducts(data || []);
      } catch (error) {
        console.error("Products fetch failed:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All Products") {
      result = result.filter((item) => item.category === activeCategory);
    }

    result = result.filter((item) => Number(item.price || 0) <= maxPrice);

    if (inStockOnly) {
      result = result.filter((item) => Number(item.stock_quantity || 0) > 0);
    }

    if (madeToOrderOnly) {
      result = result.filter((item) => item.measurement_required === true);
    }

    if (sortBy === "low-high") {
      result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    }

    if (sortBy === "high-low") {
      result.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    }

    if (sortBy === "latest") {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    }

    return result;
  }, [products, activeCategory, maxPrice, inStockOnly, madeToOrderOnly, sortBy]);

  const clearFilters = () => {
    setActiveCategory("All Products");
    setMaxPrice(5000);
    setInStockOnly(false);
    setMadeToOrderOnly(false);
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen bg-white text-[#061735]">
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
              <button
                onClick={() => setActiveCategory("IAF Uniforms")}
                className="rounded-md bg-[#b89b3c] px-7 py-3 text-sm font-semibold text-white"
              >
                Shop Uniforms →
              </button>

              <button
                onClick={() => setActiveCategory("Belts")}
                className="rounded-md border border-white px-7 py-3 text-sm font-semibold"
              >
                Shop Accessories →
              </button>
            </div>
          </div>

          <div className="hidden justify-center md:flex">
            <img
              src={ShirtModel}
              alt="IAF Uniform"
              className="h-[360px] object-contain"
            />
          </div>
        </div>
      </section>

      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-4 py-4 text-sm font-semibold lg:px-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`shrink-0 pb-2 ${
                activeCategory === item
                  ? "border-b-2 border-[#b89b3c] text-[#b89b3c]"
                  : "text-[#061735]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="hidden rounded-xl border bg-white p-5 shadow-sm lg:block">
          <h3 className="font-bold">Categories</h3>

          <div className="mt-5 space-y-3 text-sm">
            {categories.slice(1).map((item) => (
              <label key={item} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={activeCategory === item}
                  onChange={() =>
                    setActiveCategory(activeCategory === item ? "All Products" : item)
                  }
                  className="h-4 w-4"
                />
                {item}
              </label>
            ))}
          </div>

          <div className="my-6 border-t" />

          <h3 className="font-bold">Price Range</h3>
          <p className="mt-3 text-sm">₹0 - ₹{maxPrice.toLocaleString("en-IN")}</p>

          <input
            type="range"
            min="0"
            max="5000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-4 w-full accent-[#b89b3c]"
          />

          <div className="my-6 border-t" />

          <h3 className="font-bold">Availability</h3>

          <div className="mt-4 space-y-3 text-sm">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              In Stock
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={madeToOrderOnly}
                onChange={(e) => setMadeToOrderOnly(e.target.checked)}
              />
              Made to Order
            </label>
          </div>

          <button
            onClick={clearFilters}
            className="mt-6 w-full rounded-md border py-2 text-sm font-semibold"
          >
            Clear Filters
          </button>
        </aside>

        <section>
          <div className="mb-6 flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold">
              {loading
                ? "Loading products..."
                : `Showing ${filteredProducts.length} of ${products.length} products`}
            </p>

            <button className="flex w-fit items-center gap-2 rounded-md border px-4 py-2 text-sm">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent outline-none"
              >
                <option value="popular">Sort by: Popular</option>
                <option value="latest">Latest</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
              <ChevronDown size={16} />
            </button>
          </div>

          {loading ? (
            <div className="rounded-xl border bg-white p-10 text-center text-sm text-gray-500">
              Loading products...
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="rounded-xl border bg-white p-10 text-center text-sm text-gray-500">
              No products found.
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-xl border bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#b89b3c] hover:shadow-xl"
                >
                  <span className="rounded bg-[#b89b3c] px-2 py-1 text-[10px] font-bold text-white">
                    {item.measurement_required ? "Custom Fit" : "Ready Stock"}
                  </span>

                  <div
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="mt-4 flex h-40 cursor-pointer items-center justify-center"
                  >
                    <img
                      src={item.images?.[0]}
                      alt={item.product_name}
                      className="h-full object-contain"
                    />
                  </div>

                  <p className="mt-4 text-[11px] uppercase text-gray-500">
                    {item.category}
                  </p>

                  <h3
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="mt-1 cursor-pointer text-sm font-bold hover:text-[#b89b3c]"
                  >
                    {item.product_name}
                  </h3>

                  <p className="mt-2 text-lg font-bold">
                    ₹{Number(item.price || 0).toLocaleString("en-IN")}
                  </p>

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
          )}

          <div className="mt-8 overflow-hidden rounded-xl bg-[#061735] text-white">
            <div className="grid items-center gap-6 px-6 py-8 md:grid-cols-[1fr_2fr_1fr]">
              <div className="hidden md:block">
                <img
                  src={ShirtModel}
                  alt=""
                  className="h-28 object-contain opacity-80"
                />
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

          <div className="mt-8 flex justify-center gap-3">
            {[1].map((item) => (
              <button
                key={item}
                className="h-9 w-9 rounded-md border bg-[#b89b3c] text-sm text-white"
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