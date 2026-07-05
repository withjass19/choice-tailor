import { supabase } from "@/lib/supabase";

export async function getHomepageCategories({ limit = 8 } = {}) {
  if (!supabase) {
    return { data: [], error: null };
  }

  const { data, error } = await supabase
    .from("categories")
    .select("id, name, image, display_order")
    .eq("status", "Active")
    .eq("show_on_homepage", true)
    .order("display_order", { ascending: true })
    .limit(limit);

  return {
    data: data ?? [],
    error,
  };
}
