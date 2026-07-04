import { useEffect, useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { toast } from "sonner";

import { supabase } from "@/lib/supabase";
import CategroyCard from "../../../components/CategoryCard/CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);

        const { data, error } = await supabase
          .from("categories")
          .select("id, name, image, display_order")
          .eq("status", "Active")
          .eq("show_on_homepage", true)
          .order("display_order", { ascending: true })
          .limit(8);

        if (error) throw error;

        setCategories(data || []);
      } catch (error) {
        console.error("Categories fetch failed:", error);
        toast.error("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="px-4 py-12 md:px-8 lg:px-12">
      <div className="text-center">
        <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
          Shop by Category
        </h2>

        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#b89b3c] md:w-20" />
          <IoAirplane className="text-lg text-[#8b762c]" />
          <span className="h-px w-12 bg-[#b89b3c] md:w-20" />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-36 animate-pulse rounded-xl bg-gray-100"
            />
          ))
        ) : categories.length === 0 ? (
          <div className="col-span-full rounded-xl border border-dashed p-10 text-center text-sm text-gray-500">
            No categories found.
          </div>
        ) : (
          categories.map((item) => (
            <CategroyCard
              key={item.id}
              categroy={item.name}
              image={item.image}
            />
          ))
        )}
      </div>
    </section>
  );
}
